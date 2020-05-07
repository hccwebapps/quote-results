import React from 'react'

export const incomeReplacement = [
  ['no_increase', 'No increase'],
  ['600', '$600 weekly'],
  ['800', '$800 weekly'],
  ['1000', '$1000 weekly'],
]

export const medical = [
  ['no_increase', 'No increase'],
  ['130000', <span>$130,000<br /><small>additional coverage</small></span>],
  ['1000000', <span>$1,000,000<br /><small>additional coverage</small></span>],
]

export const medicalCatastrophic = [
  ['no_increase', 'No increase'],
  ['2000000', <span>$2,000,000<br /><small>additional coverage</small></span>],
]

export const caregiver = [
  ['no_increase', 'No increase'],
  ['all_injuries', <span><small>additional coverage for</small>All injuries</span>],
]

export const funeral = [
  ['no_increase', 'No increase'],
  ['increased', <span><small>Increased benefits for</small>Death & Funerals</span>],
]

const valueCovs = [
  {
    name: 'liability',
    value: '2000000',
    title: 'Liability Limit',
    help: 'Some help copy for Damage to liability limit',
  },
  {
    name: 'coverage_comprehensive',
    value: '500',
    title: 'Comprehensive Coverage',
    help: 'Some help copy for Damage to comprehensive coverage',
  },
  {
    name: 'coverage_collision',
    value: '500',
    title: 'Collision Coverage',
    help: 'Some help copy for collision coverage',
  },
]

export const coverage = [
  {
    id: 1,
    name: 'standard_coverage',
    title: <span>Standard<br />Accident Benefits</span>,
    help: 'Some help copy for Damage to Non-owned Autos',
  },
  {
    id: 2,
    name: 'damage_non_owned',
    title: <span>Damage to<br />Non-owned Autos</span>,
    help: 'Some help copy for Damage to Non-owned Autos',
  },
  {
    id: 3,
    name: 'waiver_depreciation',
    title: <span>Waiver of<br />Depreciation</span>,
    help: 'Some help copy for Waiver of Depreciation',
  },
  {
    id: 4,
    name: 'accident_waiver',
    title: <span>Accident<br />Waiver</span>,
    help: 'Some help copy for Accident Waiver',
  },
  {
    id: 5,
    name: 'transportation_replacement',
    title: <span>Transportation<br />Replacement</span>,
    help: 'Some help copy for Deductible (Collision)',
  },
  {
    id: 6,
    name: 'restriction_glass',
    title: <span>Restriction of<br />Glass Coverage</span>,
    help: 'Some help copy for Restriction of glass coverage',
  },
]

