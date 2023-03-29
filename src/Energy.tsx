import UNDPColorModule from 'undp-viz-colors';
import { DotPlot } from './Components/DotPlot';
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
                  'Primary energy consumption per capita, measured in kilowatt-hours',
              )
            ].yearlyData
          }
          strokeWidth={1}
          lineColor='#232E3D'
          graphTitle='Primary energy consumption per capita'
          removeSuffix
          suffix='mWh'
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
        <DotPlot
          graphTitle='People with access to electricity'
          size={200}
          value={
            data.indicators[
              data.indicators.findIndex(
                d => d.indicator === 'Access to electricity (% of population)',
              )
            ].yearlyData[
              data.indicators[
                data.indicators.findIndex(
                  d =>
                    d.indicator === 'Access to electricity (% of population)',
                )
              ].yearlyData.length - 1
            ].value
          }
          year={
            data.indicators[
              data.indicators.findIndex(
                d => d.indicator === 'Access to electricity (% of population)',
              )
            ].yearlyData[
              data.indicators[
                data.indicators.findIndex(
                  d =>
                    d.indicator === 'Access to electricity (% of population)',
                )
              ].yearlyData.length - 1
            ].year
          }
        />
        <DotPlot
          graphTitle='People with access to clean fuels and technologies for cooking'
          size={200}
          value={
            data.indicators[
              data.indicators.findIndex(
                d =>
                  d.indicator ===
                  'Access to clean fuels and technologies for cooking  (% of population)',
              )
            ].yearlyData[
              data.indicators[
                data.indicators.findIndex(
                  d =>
                    d.indicator ===
                    'Access to clean fuels and technologies for cooking  (% of population)',
                )
              ].yearlyData.length - 1
            ].value
          }
          year={
            data.indicators[
              data.indicators.findIndex(
                d =>
                  d.indicator ===
                  'Access to clean fuels and technologies for cooking  (% of population)',
              )
            ].yearlyData[
              data.indicators[
                data.indicators.findIndex(
                  d =>
                    d.indicator ===
                    'Access to clean fuels and technologies for cooking  (% of population)',
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
          width: 'calc(33.33% - 2rem)',
          flexGrow: 1,
          flexBasis: '20rem',
          gap: 'var(--spacing-09)',
        }}
      >
        <DotPlot
          graphTitle='Urban people with access to electricity'
          size={200}
          value={
            data.indicators[
              data.indicators.findIndex(
                d =>
                  d.indicator ===
                  'Access to electricity, urban (% of urban population)',
              )
            ].yearlyData[
              data.indicators[
                data.indicators.findIndex(
                  d =>
                    d.indicator ===
                    'Access to electricity, urban (% of urban population)',
                )
              ].yearlyData.length - 1
            ].value
          }
          year={
            data.indicators[
              data.indicators.findIndex(
                d =>
                  d.indicator ===
                  'Access to electricity, urban (% of urban population)',
              )
            ].yearlyData[
              data.indicators[
                data.indicators.findIndex(
                  d =>
                    d.indicator ===
                    'Access to electricity, urban (% of urban population)',
                )
              ].yearlyData.length - 1
            ].year
          }
          dotColor={UNDPColorModule.categoricalColors.locationColors.urban}
        />
        <DotPlot
          graphTitle='Rural people with access to electricity'
          size={200}
          value={
            data.indicators[
              data.indicators.findIndex(
                d =>
                  d.indicator ===
                  'Access to electricity, rural (% of rural population)',
              )
            ].yearlyData[
              data.indicators[
                data.indicators.findIndex(
                  d =>
                    d.indicator ===
                    'Access to electricity, rural (% of rural population)',
                )
              ].yearlyData.length - 1
            ].value
          }
          year={
            data.indicators[
              data.indicators.findIndex(
                d =>
                  d.indicator ===
                  'Access to electricity, rural (% of rural population)',
              )
            ].yearlyData[
              data.indicators[
                data.indicators.findIndex(
                  d =>
                    d.indicator ===
                    'Access to electricity, rural (% of rural population)',
                )
              ].yearlyData.length - 1
            ].year
          }
          dotColor={UNDPColorModule.categoricalColors.locationColors.rural}
        />
      </div>
    </div>
  );
}

export default EnergyViz;
