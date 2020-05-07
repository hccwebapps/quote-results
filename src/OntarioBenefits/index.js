import React from 'react'
import Price from 'Price'
import Choice from 'Choice'
import RadioGroup from 'RadioGroup'
import Button from 'Button'
import useForm from 'useForm'
import {
  incomeReplacement, medical, medicalCatastrophic,
  caregiver, funeral,
} from 'vars'

import './style.scss'

const OntarioBenefits = () => {

  const { data, setValue } = useForm({})

  return (
    <div className="OAB">
      <Price Simple />
      <form>
        <div className="benefit-field">
          <strong>Income Replacement</strong>
          <p>With income replacement you can have peace of mind with regards to your car payments.</p>
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
          <strong>Medical, Rehabilitation and Attendant Care (Non-Catastrophic Injury)</strong>
          <p>Provides additional coverage should you suffer a non-catastrophic injury.</p>
          <RadioGroup
            name="medical"
            choices={medical}
            value={data['medical']}
            defaultValue="no_increase"
            setValue={setValue}
          />
        </div>
        <div className="benefit-field">
          <strong>Medical, Rehabilitation and Attendant Care (Catastrophic Injury)</strong>
          <p>Provides additional coverage should you suffer a catastrophic injury.</p>
          <RadioGroup
            name="medical_catastrophic"
            choices={medicalCatastrophic}
            value={data['medical_catastrophic']}
            defaultValue="no_increase"
            setValue={setValue}
          />
        </div>
        <div className="benefit-field">
          <strong>Caregiver Benefit & Housekeeping and Home Maintenance Expenses</strong>
          <p>Increased coverage for caregivers, housekeeping and home maintenance.</p>
          <RadioGroup
            name="caregiver"
            choices={caregiver}
            value={data['caregiver']}
            defaultValue="no_increase"
            setValue={setValue}
          />
        </div>
        <div className="benefit-field">
          <strong>Death & Funeral</strong>
          <p>Additional peace of mind for costs relating to death or funerals.</p>
          <RadioGroup
            name="funeral"
            choices={funeral}
            value={data['funeral']}
            defaultValue="no_increase"
            setValue={setValue}
          />
        </div>
        <div className="benefit-field">
          <strong>Dependent Care</strong>
          <p>Additional coverage for your dependents in the event of an automobile accident.</p>
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
          <p>Additional coverage for indexation, whatever that is.</p>
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
          <Button Submit to="/online">Continue</Button>
        </div>
      </form>
      <Choice />
    </div>
  )
}

export default OntarioBenefits