import { DataNACard } from './Components/DataNACard';
import { LineChart } from './Components/LineChart';
import { ValueCard } from './Components/ValueCard';
import { CountryGroupDataType } from './Types';

interface Props {
  data: CountryGroupDataType;
}

function CountryViz(props: Props) {
  const { data } = props;
  return (
    <div
      className='max-width flex-div flex-wrap flex-hor-align-center'
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
        {data.indicators.findIndex(d => d.indicator === 'Population, total') !==
        -1 ? (
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
        ) : (
          <DataNACard graphTitle='Population, total' />
        )}
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
        {data.indicators.findIndex(
          d => d.indicator === 'GDP per capita, PPP (current international $)',
        ) !== -1 ? (
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
            strokeWidth={1}
            lineColor='#232E3D'
            graphTitle='GDP per capita, PPP (current international $)'
          />
        ) : (
          <DataNACard graphTitle='GDP per capita, PPP (current international $)' />
        )}
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
          title='Human development Index (HDI)'
          number={
            data.indicators.findIndex(
              d => d.indicator === 'Human development index (HDI)',
            ) === -1
              ? 'NA'
              : data.indicators[
                  data.indicators.findIndex(
                    d => d.indicator === 'Human development index (HDI)',
                  )
                ].yearlyData[
                  data.indicators[
                    data.indicators.findIndex(
                      d => d.indicator === 'Human development index (HDI)',
                    )
                  ].yearlyData.length - 1
                ].value
          }
          year={
            data.indicators.findIndex(
              d => d.indicator === 'Human development index (HDI)',
            ) === -1
              ? undefined
              : data.indicators[
                  data.indicators.findIndex(
                    d => d.indicator === 'Human development index (HDI)',
                  )
                ].yearlyData[
                  data.indicators[
                    data.indicators.findIndex(
                      d => d.indicator === 'Human development index (HDI)',
                    )
                  ].yearlyData.length - 1
                ].year
          }
        />
        <ValueCard
          title='Gender Inequality Index'
          number={
            data.indicators.findIndex(
              d =>
                d.indicator ===
                'Gender Inequality Index-Gender Inequality Index',
            ) === -1
              ? 'NA'
              : data.indicators[
                  data.indicators.findIndex(
                    d =>
                      d.indicator ===
                      'Gender Inequality Index-Gender Inequality Index',
                  )
                ].yearlyData[
                  data.indicators[
                    data.indicators.findIndex(
                      d =>
                        d.indicator ===
                        'Gender Inequality Index-Gender Inequality Index',
                    )
                  ].yearlyData.length - 1
                ].value
          }
          year={
            data.indicators.findIndex(
              d =>
                d.indicator ===
                'Gender Inequality Index-Gender Inequality Index',
            ) === -1
              ? undefined
              : data.indicators[
                  data.indicators.findIndex(
                    d =>
                      d.indicator ===
                      'Gender Inequality Index-Gender Inequality Index',
                  )
                ].yearlyData[
                  data.indicators[
                    data.indicators.findIndex(
                      d =>
                        d.indicator ===
                        'Gender Inequality Index-Gender Inequality Index',
                    )
                  ].yearlyData.length - 1
                ].year
          }
        />
      </div>
    </div>
  );
}

export default CountryViz;
