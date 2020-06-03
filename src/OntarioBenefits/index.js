import React, { useState, useContext, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import Price from 'Price'
import Choice from 'Choice'
import RadioGroup from 'RadioGroup'
import Button from 'Button'
import useForm from 'useForm'
import { AppContext } from 'App'
import {
  incomeReplacement, medical, medicalCatastrophic,
  caregiver, funeral,
} from 'vars'

import './style.scss'

const OntarioBenefits = ({ setModalActive }) => {

  let history = useHistory()

  const [oabActive, setOabActive] = useState('')

  const { oabsChanged, setOabsChanged } = useContext(AppContext)

  const { data, setValue } = useForm({})

  const anyIncreased = Object.keys(data).filter(x => {
    return data[x] !== 'no_increase' && data[x] !== 'no'
  }).length > 0

  useEffect(() => {
    setOabsChanged(anyIncreased)
  }, [data])

  const handleSubmit = e => {
    e.preventDefault()
    if (oabsChanged) {
      setOabsChanged(false)
    } else if (!anyIncreased) {
      setModalActive(true)
    } else {
      history.push('/offline-received')
    }
  }

  const oabActiveClick = (e, oab) => {
    e.preventDefault()
    const oabToSet = oab === oabActive ? '' : oab 
    setOabActive(oabToSet)
  }

  return (
    <div className="OAB">
      <Price Simple />
      <form>
        <div className="benefit-field">
          <strong>
            <Button onClick={e => oabActiveClick(e, 'income_replacement')} className="Small Rounded ShowHelp">?</Button>
            Income Replacement
          </strong>
          <p>Income Replacement replaces up to 70% of your gross income if you cannot work due to an auto accident.</p>
          <div className={oabActive === 'income_replacement' ? 'HelpCopy Active' : 'HelpCopy'}>
            <small>
              Standard coverage on your auto policy is up to $400 a week. Please select an increased optional amount in the drop down if required.
            </small>
          </div>
          <RadioGroup
            name="income_replacement"
            choices={incomeReplacement}
            value={data['income_replacement']}
            defaultValue="no_increase"
            smallCopy="Up to"
            setValue={setValue}
          />
        </div>
        <div className="benefit-field">
          <strong>
            <Button onClick={e => oabActiveClick(e, 'medical')} className="Small Rounded ShowHelp">?</Button>
            Medical, Rehabilitation and Attendant Care (Non-Catastrophic Injury)
          </strong>
          <p>Reimbursement for medical and rehabilitation costs that are not covered by OHIP.</p>
          <div className={oabActive === 'medical' ? 'HelpCopy Active' : 'HelpCopy'}>
            <small>
              Attendant care is reimbursement for an attendant to care for you if you are unable. Standard coverage provides up to $65,000 for non-catastrophic injuries. Please select an increased optional amount in the drop down if required.
          </small>
          </div>
          <RadioGroup
            name="medical"
            choices={medical}
            value={data['medical']}
            defaultValue="no_increase"
            setValue={setValue}
          />
        </div>
        <div className="benefit-field">
          <strong>
            <Button onClick={e => oabActiveClick(e, 'medical_catastrophic')} className="Small Rounded ShowHelp">?</Button>
            Medical, Rehabilitation and Attendant Care (Catastrophic Injury)
          </strong>
          <p>Reimbursement for medical and rehabilitation costs that are not covered by OHIP.</p>
          <div className={oabActive === 'medical_catastrophic' ? 'HelpCopy Active' : 'HelpCopy'}>
            <small>
              Attendant care is reimbursement for an attendant to care for you if you are unable. Standard coverage provides up to $1,000,000 for catastrophic injuries. Please select an increased optional amount if required.
          </small>
          </div>
          <RadioGroup
            name="medical_catastrophic"
            choices={medicalCatastrophic}
            value={data['medical_catastrophic']}
            defaultValue="no_increase"
            setValue={setValue}
          />
        </div>
        <div className="benefit-field">
          <strong>
            <Button onClick={e => oabActiveClick(e, 'caregiver')} className="Small Rounded ShowHelp">?</Button>
            Caregiver Benefit & Housekeeping and Home Maintenance Expenses
          </strong>
          <p>Reimbursement to hire someone to care for your dependents or take care of your household if you are injured in an auto accident.</p>
          <div className={oabActive === 'caregiver' ? 'HelpCopy Active' : 'HelpCopy'}>
            <small>
              Standard coverage is for catastrophic injuries and includes up to $250/week for your first dependent, $50/week for additional dependents, and up to $100 week for housekeeping. If you would like coverage for non-catastrophic injuries, please select "All Injuries".
          </small>
          </div>
          <RadioGroup
            name="caregiver"
            choices={caregiver}
            value={data['caregiver']}
            defaultValue="no_increase"
            setValue={setValue}
          />
        </div>
        <div className="benefit-field">
          <strong>
            <Button onClick={e => oabActiveClick(e, 'funeral')} className="Small Rounded ShowHelp">?</Button>
            Death & Funeral
          </strong>
          <p>A lump sum payout to your family if you pass away in an auto accident, and a second payout to help cover cost of funeral expenses.</p>
          <div className={oabActive === 'funeral' ? 'HelpCopy Active' : 'HelpCopy'}>
            <small>
              Standard coverage includes a $25,000 lump sum for a spouse, $10,000 for each dependent, and up to $6,000 for funeral expenses. If you would like to increase this coverage to $50,000 for spouse, $20,000 for each dependent, and up to $8,000 funeral, please select "Increased Benefits".
          </small>
          </div>
          <RadioGroup
            name="funeral"
            choices={funeral}
            value={data['funeral']}
            defaultValue="no_increase"
            setValue={setValue}
          />
        </div>
        <div className="benefit-field">
          <strong>
            <Button onClick={e => oabActiveClick(e, 'dependent')} className="Small Rounded ShowHelp">?</Button>
            Dependent Care
          </strong>
          <p>Reimbursement for additional expenses to care for your dependents if you’re employed and injured in an auto accident.</p>
          <div className={oabActive === 'dependent' ? 'HelpCopy Active' : 'HelpCopy'}>
            <small>
              Dependent Care is not included in Standard Coverage. If you chose to purchase this coverage, it includes up to $75 per week for your first dependent and $25 per week for additional dependents to a max of $150 a week.
          </small>
          </div>
          <RadioGroup
            name="dependent"
            choices={[['no', 'No Increase'], ['yes', 'Increased benefits']]}
            value={data['dependent']}
            defaultValue="no"
            setValue={setValue}
          />
        </div>
        <div className="benefit-field">
          <strong>Indexation Benefit</strong>
          <p>Adjusts increased optional benefits for changes in inflation.</p>
          <RadioGroup
            name="indexation"
            choices={[
              ['no', 'No Increase'],
              ['yes', <span><small>Increased benefits for</small>Indexation</span>]
            ]}
            value={data['indexation']}
            defaultValue="no"
            setValue={setValue}
          />
        </div>
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <Button onClick={handleSubmit} className="Large Rounded Success">
            {oabsChanged ? 'Recalculate' : 'Continue'}
          </Button>
        </div>
      </form>
      <Choice />
    </div>
  )
}

export default OntarioBenefits