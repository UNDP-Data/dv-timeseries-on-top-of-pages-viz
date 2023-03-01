import UNDPColorModule from 'undp-viz-colors';
import { LineChart } from './Components/LineChart';
import { CountryGroupDataType } from './Types';

interface Props {
  data: CountryGroupDataType;
}

function EnergyViz(props: Props) {
  const { data } = props;
  return (
    <div
      className='flex-div flex-wrap flex-hor-align-center'
      style={{ gap: 'var(--spacing-09)' }}
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
                  'Renewable energy consumption (% of total final energy consumption)',
              )
            ].yearlyData
          }
          strokeWidth={1}
          lineColor='#232E3D'
          graphTitle='Renewable energy consumption (% of total final energy consumption)'
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
                d => d.indicator === 'Urban Population, total',
              )
            ].yearlyData
          }
          lineColor={UNDPColorModule.categoricalColors.locationColors.urban}
          strokeWidth={2}
          graphTitle='Urban Population'
        />
        <LineChart
          data={
            data.indicators[
              data.indicators.findIndex(
                d => d.indicator === 'Rural Population, total',
              )
            ].yearlyData
          }
          lineColor={UNDPColorModule.categoricalColors.locationColors.rural}
          strokeWidth={2}
          graphTitle='Rural Population'
        />
      </div>
    </div>
  );
}

export default EnergyViz;
