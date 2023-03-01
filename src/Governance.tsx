import { LineChart } from './Components/LineChart';
import { CountryGroupDataType } from './Types';
import { ValueCard } from './Components/ValueCard';

interface Props {
  data: CountryGroupDataType;
}

function GovernanceViz(props: Props) {
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
                d => d.indicator === 'Population, total',
              )
            ].yearlyData
          }
          strokeWidth={1}
          lineColor='#232E3D'
          graphTitle='Population, total'
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
          data={
            data.indicators[
              data.indicators.findIndex(
                d =>
                  d.indicator ===
                  'GDP per capita, PPP (current international $)',
              )
            ].yearlyData
          }
          lineColor='#232E3D'
          strokeWidth={2}
          graphTitle='GDP per capita, PPP (current international $)'
          prefix='US $'
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
          title='CPIA public sector management and institutions cluster average (1=low to 6=high)'
          number={
            data.indicators[
              data.indicators.findIndex(
                d =>
                  d.indicator ===
                  'CPIA Public sector management and institutions',
              )
            ].yearlyData[
              data.indicators[
                data.indicators.findIndex(
                  d =>
                    d.indicator ===
                    'CPIA Public sector management and institutions',
                )
              ].yearlyData.length - 1
            ].value
          }
          year={
            data.indicators[
              data.indicators.findIndex(
                d =>
                  d.indicator ===
                  'CPIA Public sector management and institutions',
              )
            ].yearlyData[
              data.indicators[
                data.indicators.findIndex(
                  d =>
                    d.indicator ===
                    'CPIA Public sector management and institutions',
                )
              ].yearlyData.length - 1
            ].year
          }
        />
        <ValueCard
          title='Human Development Index (HDI)'
          number={
            data.indicators[
              data.indicators.findIndex(
                d => d.indicator === 'Human Development Index (HDI)',
              )
            ].yearlyData[
              data.indicators[
                data.indicators.findIndex(
                  d => d.indicator === 'Human Development Index (HDI)',
                )
              ].yearlyData.length - 1
            ].value
          }
          year={
            data.indicators[
              data.indicators.findIndex(
                d => d.indicator === 'Human Development Index (HDI)',
              )
            ].yearlyData[
              data.indicators[
                data.indicators.findIndex(
                  d => d.indicator === 'Human Development Index (HDI)',
                )
              ].yearlyData.length - 1
            ].year
          }
        />
      </div>
    </div>
  );
}

export default GovernanceViz;
