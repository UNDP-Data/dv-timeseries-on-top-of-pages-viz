import { LineChart } from './Components/LineChart';
import { CountryGroupDataType } from './Types';
import { ValueCard } from './Components/ValueCard';
import { DotPlot } from './Components/DotPlot';

interface Props {
  data: CountryGroupDataType;
}

const WORKING_POVERTY_DATA = {
  indicator:
    'Working poverty rate (percentage of employed living below US$1.90 PPP) (%)',
  yearlyData: [
    {
      year: 2010,
      value: 13.72,
    },
    {
      year: 2011,
      value: 11.8,
    },
    {
      year: 2012,
      value: 10.76,
    },
    {
      year: 2013,
      value: 8.85,
    },
    {
      year: 2014,
      value: 8.23,
    },
    {
      year: 2015,
      value: 7.77,
    },
    {
      year: 2016,
      value: 7.37,
    },
    {
      year: 2017,
      value: 7.03,
    },
    {
      year: 2018,
      value: 6.77,
    },
    {
      year: 2019,
      value: 6.68,
    },
    {
      year: 2020,
      value: 7.19,
    },
    {
      year: 2021,
      value: 6.72,
    },
    {
      year: 2022,
      value: 6.38,
    },
  ],
};

function PovertyAndInequalityViz(props: Props) {
  const { data } = props;
  return (
    <div
      className='flex-div flex-wrap flex-hor-align-center'
      style={{ gap: 'var(--spacing-09)', width: '100%' }}
    >
      <div
        className='flex-div'
        style={{
          flexDirection: 'column',
          width: 'calc(33.33% - 2rem)',
          flexGrow: 1,
          flexBasis: '20rem',
        }}
      >
        <LineChart
          data={
            data.indicators[
              data.indicators.findIndex(
                d =>
                  d.indicator ===
                  'Poverty headcount ratio at $2.15 a day (2017 PPP) (% of population)',
              )
            ].yearlyData
          }
          strokeWidth={1}
          lineColor='#232E3D'
          graphTitle='Poverty headcount ratio at $2.15 a day (2017 PPP) (% of population)'
          suffix='%'
        />
      </div>
      <div
        className='flex-div'
        style={{
          flexDirection: 'column',
          width: 'calc(33.33% - 2rem)',
          flexGrow: 1,
          flexBasis: '20rem',
          gap: 'var(--spacing-09)',
        }}
      >
        <ValueCard
          title='people are multidimensionally poor'
          number='1.2 Billion'
          year={2021}
        />
        <DotPlot
          graphTitle='Vulnerable persons covered by social assistance'
          value={28.9}
          size={200}
          year={2021}
        />
      </div>
      <div
        className='flex-div'
        style={{
          flexDirection: 'column',
          width: 'calc(33.33% - 2rem)',
          flexGrow: 1,
          flexBasis: '20rem',
          gap: 'var(--spacing-09)',
        }}
      >
        <LineChart
          data={WORKING_POVERTY_DATA.yearlyData}
          lineColor='#232E3D'
          suffix='%'
          strokeWidth={2}
          graphTitle='Working poverty rate (percentage of employed living below US$1.90 PPP) (%)'
        />
        <LineChart
          data={
            data.indicators[
              data.indicators.findIndex(
                d => d.indicator === 'Inequality-adjusted HDI',
              )
            ].yearlyData
          }
          lineColor='#232E3D'
          strokeWidth={2}
          graphTitle='Inequality-adjusted HDI'
        />
      </div>
    </div>
  );
}

export default PovertyAndInequalityViz;
