import { useState, useEffect } from 'react'
import PropertyCard from './PropertyCard'

// API settings
const API_URL = 'http://localhost:8000'
const TOKEN   = 'Saja'

function PropertiesSection({ isDark }) {

  // Real data from API — starts as empty array
  const [properties, setProperties]   = useState([])

  // True while waiting for data
  const [loading, setLoading]         = useState(true)

  // Holds error message if something goes wrong
  const [error, setError]             = useState(null)

  // Current page number — starts at 1
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

      // Send GET request with token and page number
      const response = await fetch(
        `${API_URL}/properties?page=${currentPage}&limit=6`,
        {
          headers: {
            'Authorization': `Bearer ${TOKEN}`
          }
        }
      )

      //console.log("backend data: ", response)

      // If response is not 200 OK, throw error
      if (!response.ok) {
        throw new Error('Failed to fetch properties')
      } 

      // Convert response to JavaScript object
      const data = await response.json()


      // Update state with real data
      setProperties(data.properties)

     // console.log("------------------", data.properties)
      setTotalPages(data.total_pages)

       // console.log("SAJA test",data)
    } catch (err) {
      // Save error message to show user
      setError(err.message)
    } finally {
      // Always hide loading — success or fail
      setLoading(false)
    }
  }

  // Colors based on theme
  const bgColor    = isDark ? '#0f1f0f' : '#f5f5f5'
  const titleColor = isDark ? '#C0DD97' : '#27500A'
  const subColor   = isDark ? '#888780' : '#5F5E5A'

  return (
    <section style={{ backgroundColor: bgColor, padding: '60px 32px' }}>

      {/* Section title */}
      <h2 style={{
        color: titleColor,
        textAlign: 'center',
        fontSize: '32px',
        marginBottom: '8px'
      }}>
        Featured Properties
      </h2>

      {/* Page info */}
      <p style={{
        color: subColor,
        textAlign: 'center',
        marginBottom: '40px',
        fontSize: '14px'
      }}>
        Page {currentPage} of {totalPages}
      </p>

      {/* Loading message */}
      {loading && (
        <p style={{
          color: titleColor,
          textAlign: 'center',
          fontSize: '18px'
        }}>
          Loading properties...
        </p>
      )}

      {/* Error message */}
      {error && (
        <p style={{
          color: '#E24B4A',
          textAlign: 'center',
          fontSize: '16px'
        }}>
          Error: {error}
        </p>
      )}

      {/* Property cards — only show when not loading and no error */}
      {!loading && !error && (
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '24px',
          flexWrap: 'wrap',
          marginBottom: '40px'
        }}>
          {properties.map((property) => (
            <PropertyCard
              key={property.id}
              property={property}
              isDark={isDark}
            />
          ))}
        </div>
      )}

      {/* Pagination buttons */}
      {!loading && !error && (
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '12px',
          marginTop: '20px'
        }}>

          {/* Previous page button */}
          <button
            onClick={() => setCurrentPage(currentPage - 1)}
            disabled={currentPage === 1}
            style={{
              backgroundColor: currentPage === 1 ? '#888780' : '#3B6D11',
              color: 'white',
              border: 'none',
              padding: '10px 24px',
              borderRadius: '8px',
              cursor: currentPage === 1 ? 'not-allowed' : 'pointer',
              fontSize: '14px'
            }}
          >
            Previous
          </button>

          {/* Current page indicator */}
          <span style={{
            color: titleColor,
            padding: '10px 16px',
            fontSize: '14px',
            fontWeight: 'bold'
          }}>
            {currentPage} / {totalPages}
          </span>

          {/* Next page button */}
          <button
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={currentPage === totalPages}
            style={{
              backgroundColor: currentPage === totalPages ? '#888780' : '#3B6D11',
              color: 'white',
              border: 'none',
              padding: '10px 24px',
              borderRadius: '8px',
              cursor: currentPage === totalPages ? 'not-allowed' : 'pointer',
              fontSize: '14px'
            }}
          >
            Next
          </button>

        </div>
      )}

    </section>
  )
}

export default PropertiesSection