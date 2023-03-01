import UNDPColorModule from 'undp-viz-colors';
import { LineChart } from './Components/LineChart';
import { CountryGroupDataType } from './Types';
import { DotPlot } from './Components/DotPlot';

interface Props {
  data: CountryGroupDataType;
}

function GenderViz(props: Props) {
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
                  'Gender Inequality Index-Maternal mortality ratio (deaths per 100,000 live births)',
              )
            ].yearlyData
          }
          lineColor='#232E3D'
          strokeWidth={2}
          graphTitle='Maternal mortality ratio (deaths per 100,000 live births)'
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
                  'Gender Inequality Index-Gender Inequality Index',
              )
            ].yearlyData
          }
          lineColor='#232E3D'
          strokeWidth={2}
          graphTitle='Gender Inequality Index (higher is better)'
        />
        <DotPlot
          graphTitle='Literate adult female'
          size={200}
          value={
            data.indicators[
              data.indicators.findIndex(
                d =>
                  d.indicator ===
                  'Literacy rate, adult female (% of females ages 15 and above)',
              )
            ].yearlyData[
              data.indicators[
                data.indicators.findIndex(
                  d =>
                    d.indicator ===
                    'Literacy rate, adult female (% of females ages 15 and above)',
                )
              ].yearlyData.length - 1
            ].value
          }
          year={
            data.indicators[
              data.indicators.findIndex(
                d =>
                  d.indicator ===
                  'Literacy rate, adult female (% of females ages 15 and above)',
              )
            ].yearlyData[
              data.indicators[
                data.indicators.findIndex(
                  d =>
                    d.indicator ===
                    'Literacy rate, adult female (% of females ages 15 and above)',
                )
              ].yearlyData.length - 1
            ].year
          }
          dotColor={UNDPColorModule.categoricalColors.genderColors.female}
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
                  'Gender Inequality Index-Labour force participation rate, female (% ages 15 and older)',
              )
            ].yearlyData
          }
          strokeWidth={1}
          lineColor='#232E3D'
          graphTitle='Labour force participation rate, female'
          suffix='%'
        />
        <DotPlot
          graphTitle='Literate adult male'
          size={200}
          value={
            data.indicators[
              data.indicators.findIndex(
                d =>
                  d.indicator ===
                  'Literacy rate, adult male (% of males ages 15 and above)',
              )
            ].yearlyData[
              data.indicators[
                data.indicators.findIndex(
                  d =>
                    d.indicator ===
                    'Literacy rate, adult male (% of males ages 15 and above)',
                )
              ].yearlyData.length - 1
            ].value
          }
          year={
            data.indicators[
              data.indicators.findIndex(
                d =>
                  d.indicator ===
                  'Literacy rate, adult male (% of males ages 15 and above)',
              )
            ].yearlyData[
              data.indicators[
                data.indicators.findIndex(
                  d =>
                    d.indicator ===
                    'Literacy rate, adult male (% of males ages 15 and above)',
                )
              ].yearlyData.length - 1
            ].year
          }
          dotColor={UNDPColorModule.categoricalColors.genderColors.male}
        />
      </div>
    </div>
  );
}

export default GenderViz;
