import React, { useContext } from 'react'
import classNames from 'classnames'
import { AppContext } from 'App'

const CoverageItem = ({ cov, setHelpSelected }) => {

  const { activeCoverages } = useContext(AppContext)

  const isActive = activeCoverages.includes(cov.id)

  const cls = classNames('CoverageItem', {
    'Active': isActive,
  })

  return (
    <div className={cls} onClick={() => setHelpSelected(cov.name)}>
      {isActive ? cov.title : (
        <strike>
          {cov.title}
        </strike>
      )}
    </div>
  )
}

export default CoverageItem