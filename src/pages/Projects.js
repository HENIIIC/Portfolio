import React from 'react'

const PROJECTS = [
  {
    title: 'picing',
    description: 'Pricing section with 3 plans',
    url: 'https://heniiic.github.io/pricing/',
    githubId: 'pricing'
  },
  {
    title: 'Business Land',
    description: 'Web page developed with only HTML and CSS',
    url: 'https://heniiic.github.io/business-land/',
    githubId: 'business-land'
  }
]

function Projects() {
  return (
    <div>
      {PROJECTS.map(item => (
        <div key={item.githubId} style={{ margin: 10, padding: 10 }}>
          <h1>{item.title}</h1>
          <p>{item.description}</p>
          <a href={item.url} target='_blank' style={{textDecoration:'none'}}>Preview</a>
          <h6>{item.githubId}</h6>
          <hr />
        </div>
      ))}
    </div>
  )
}

export default Projects