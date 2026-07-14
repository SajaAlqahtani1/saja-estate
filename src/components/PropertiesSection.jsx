import { useState, useEffect, useMemo } from 'react'
import PropertyCard from './PropertyCard'

// API settings
const API_URL = 'http://localhost:8000'
const TOKEN   = 'Saja'

// searchText comes as prop from App.jsx
function PropertiesSection({ searchText }) {

  // Real data from API - starts as empty array
  const [properties, setProperties]   = useState([])

  // True while waiting for data
  const [loading, setLoading]         = useState(true)

  // Holds error message if something goes wrong
  const [error, setError]             = useState(null)

  // Current page number - starts at 1
  const [currentPage, setCurrentPage] = useState(1)

  // Total pages from API response
  const [totalPages, setTotalPages]   = useState(1)

  // useEffect runs fetchProperties when component loads
  // and every time currentPage changes
  useEffect(() => {
    fetchProperties()
  }, [currentPage])

  // Fetches properties from FastAPI
  async function fetchProperties() {
    try {
      setLoading(true)
      setError(null)

      const response = await fetch(
        `${API_URL}/properties?page=${currentPage}&limit=6`,
        {
          headers: {
            'Authorization': `Bearer ${TOKEN}`
          }
        }
      )

      if (!response.ok) {
        throw new Error('Failed to fetch properties')
      }

      const data = await response.json()
      setProperties(data.properties)
      setTotalPages(data.total_pages)

    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  // Filter properties based on searchText from Hero
  // useMemo remembers the result — only recalculates
  // when properties or searchText changes
  const filteredProperties = useMemo(() => {
    return searchText.trim() === ''
      ? properties
      : properties.filter(property => 
          property.name.toLowerCase().includes(searchText.toLowerCase())
        )
  }, [properties, searchText])

  // Average price of the currently filtered/searched properties
  // useMemo so it only recalculates when filteredProperties changes
  const averagePrice = useMemo(() => {
    if (filteredProperties.length === 0) return 0

    const total = filteredProperties.reduce((sum, property) => sum + property.price, 0)
    return Math.round(total / filteredProperties.length)
  }, [filteredProperties]) 

  return (
    <section className="px-8 py-[60px] bg-[#f5f5f5] dark:bg-[#0f1f0f]">

      {/* Section title */}
      <h2 className="text-center text-[32px] mb-2 text-[#27500A] dark:text-[#C0DD97]">
        Featured Properties
      </h2>

      {/* Page info — only show when not searching */}
      {searchText.trim() === '' && (
        <p className="text-center mb-2 text-sm text-[#5F5E5A] dark:text-[#888780]">
          Page {currentPage} of {totalPages}
        </p>
      )}

      {/* Loading message */}
      {loading && (
        <p className="text-center text-lg text-[#27500A] dark:text-[#C0DD97]">
          Loading properties...
        </p>
      )}

      {/* Error message */}
      {error && (
        <p className="text-center text-base text-[#E24B4A]">
          Error: {error}
        </p>
      )}

      {/* No results message */}
      {!loading && !error && filteredProperties.length === 0 && (
        <p className="text-center text-base mt-5 text-[#5F5E5A] dark:text-[#888780]">
          No properties found for "{searchText}"
        </p>
      )}

      {/* Results count + average price — only show when actively searching */}
      {!loading && !error && searchText.trim() !== '' && filteredProperties.length > 0 && (
        <p className="text-center text-[13px] mb-6 text-[#5F5E5A] dark:text-[#888780]">
          {filteredProperties.length} {filteredProperties.length === 1 ? 'property' : 'properties'} found for "{searchText}"
          {' — average price SAR '}{averagePrice.toLocaleString()}
        </p>
      )}

      {/* Property cards — uses filteredProperties */}
      {!loading && !error && filteredProperties.length > 0 && (
        <div className="flex justify-center gap-6 flex-wrap mb-10">
          {filteredProperties.map((property) => (
            <PropertyCard
              key={property.id}
              property={property}
            />
          ))}
        </div>
      )}

      {/* Pagination — hidden while searching */}
      {!loading && !error && searchText.trim() === '' && (
        <div className="flex justify-center items-center gap-3 mt-5">

          <button
            onClick={() => setCurrentPage(currentPage - 1)}
            disabled={currentPage === 1}
            className={`text-white border-none px-6 py-2.5 rounded-lg text-sm ${
              currentPage === 1 ? 'bg-[#888780] cursor-not-allowed' : 'bg-[#3B6D11] cursor-pointer'
            }`}
          >
            Previous
          </button>

          <span className="px-4 py-2.5 text-sm font-bold text-[#27500A] dark:text-[#C0DD97]">
            {currentPage} / {totalPages}
          </span>

          <button
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`text-white border-none px-6 py-2.5 rounded-lg text-sm ${
              currentPage === totalPages ? 'bg-[#888780] cursor-not-allowed' : 'bg-[#3B6D11] cursor-pointer'
            }`}
          >
            Next
          </button>

        </div>
      )}

    </section>
  )
}

export default PropertiesSection