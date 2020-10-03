import React from "react"
import ContentLoader from "react-content-loader"

const Profileplaceholder = (props) => (

  <ContentLoader 
  speed={2}
  width={300}
  height={150}
  viewBox="0 0 300 100"
  backgroundColor="#f3f3f3"
  foregroundColor="#ecebeb"
  {...props}
>
  <rect x="48" y="0" rx="3" ry="3" width="164" height="13" /> 
  <rect x="49" y="22" rx="3" ry="3" width="160" height="12" /> 
  <rect x="0" y="56" rx="3" ry="3" width="260" height="6" /> 
  <rect x="0" y="72" rx="3" ry="3" width="260" height="6" /> 
  <rect x="0" y="88" rx="3" ry="3" width="178" height="6" /> 
  <circle cx="20" cy="20" r="20" />
  </ContentLoader>
)

export default Profileplaceholder;