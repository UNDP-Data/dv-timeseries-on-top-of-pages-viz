import { DotPlot } from './Components/DotPlot';
import { LineChart } from './Components/LineChart';
import { CountryGroupDataType } from './Types';

interface Props {
  data: CountryGroupDataType;
}

function ResilienceViz(props: Props) {
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
          width: 'calc(50% - 3rem)',
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
                  'Refugee population by country or territory of asylum',
              )
            ].yearlyData
          }
          lineColor='#232E3D'
          strokeWidth={2}
          graphTitle='Refugee population'
        />
        <DotPlot
          graphTitle='People covered by at least one social protection benefit'
          size={200}
          value={
            data.indicators[
              data.indicators.findIndex(
                d =>
                  d.indicator ===
                  'Population covered by at least one social protection benefit',
              )
            ].yearlyData[
              data.indicators[
                data.indicators.findIndex(
                  d =>
                    d.indicator ===
                    'Population covered by at least one social protection benefit',
                )
              ].yearlyData.length - 1
            ].value
          }
          year={
            data.indicators[
              data.indicators.findIndex(
                d =>
                  d.indicator ===
                  'Population covered by at least one social protection benefit',
              )
            ].yearlyData[
              data.indicators[
                data.indicators.findIndex(
                  d =>
                    d.indicator ===
                    'Population covered by at least one social protection benefit',
                )
              ].yearlyData.length - 1
            ].year
          }
        />
      </div>
      <div
        className='flex-div'
        style={{
          flexDirection: 'column',
          width: 'calc(50% - 3rem)',
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
                  'International migrant stock at mid-year (both sexes)',
              )
            ].yearlyData
          }
          lineColor='#232E3D'
          strokeWidth={2}
          graphTitle='International migrant stock at mid-year (total)'
        />
        <DotPlot
          graphTitle='People using safely managed drinking water services'
          size={200}
          value={
            data.indicators[
              data.indicators.findIndex(
                d =>
                  d.indicator ===
                  'People using safely managed drinking water services (% of population)',
              )
            ].yearlyData[
              data.indicators[
                data.indicators.findIndex(
                  d =>
                    d.indicator ===
                    'People using safely managed drinking water services (% of population)',
                )
              ].yearlyData.length - 1
            ].value
          }
          year={
            data.indicators[
              data.indicators.findIndex(
                d =>
                  d.indicator ===
                  'People using safely managed drinking water services (% of population)',
              )
            ].yearlyData[
              data.indicators[
                data.indicators.findIndex(
                  d =>
                    d.indicator ===
                    'People using safely managed drinking water services (% of population)',
                )
              ].yearlyData.length - 1
            ].year
          }
        />
      </div>
    </div>
  );
}

export default ResilienceViz;
