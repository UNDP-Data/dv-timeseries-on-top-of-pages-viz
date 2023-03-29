import { DataNACard } from './Components/DataNACard';
import { LineChart } from './Components/LineChart';
import { ValueCard } from './Components/ValueCard';
import { CountryGroupDataType } from './Types';

interface Props {
  data: CountryGroupDataType;
}

function RegionViz(props: Props) {
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
          gap: 'var(--spacing-09)',
        }}
      >
        {data.indicators.findIndex(
          d =>
            d.indicator === 'Gender Inequality Index-Gender Inequality Index',
        ) !== -1 ? (
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
        ) : (
          <DataNACard graphTitle='Gender Inequality Index' />
        )}
        {data.indicators.findIndex(
          d => d.indicator === 'Gross National Income Per Capita (2017 PPP$)',
        ) !== -1 ? (
          <LineChart
            data={
              data.indicators[
                data.indicators.findIndex(
                  d =>
                    d.indicator ===
                    'Gross National Income Per Capita (2017 PPP$)',
                )
              ].yearlyData
            }
            strokeWidth={1}
            lineColor='#232E3D'
            graphTitle='Gross National Income Per Capita (2017 PPP$)'
          />
        ) : (
          <DataNACard graphTitle='Gross National Income Per Capita (2017 PPP$)' />
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
          d => d.indicator === 'Human development index (HDI)',
        ) !== -1 ? (
          <ValueCard
            title='Human Development Index (HDI)'
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
        ) : (
          <DataNACard graphTitle='Human Development Index (HDI)' />
        )}
        {data.indicators.findIndex(
          d => d.indicator === 'Inequality in income',
        ) !== -1 ? (
          <LineChart
            data={
              data.indicators[
                data.indicators.findIndex(
                  d => d.indicator === 'Inequality in income',
                )
              ].yearlyData
            }
            strokeWidth={1}
            lineColor='#232E3D'
            graphTitle='Inequality in income'
          />
        ) : (
          <DataNACard graphTitle='Inequality in income' />
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
          d =>
            d.indicator ===
            'Planetary pressures adjusted Human Development Index (value)',
        ) !== -1 ? (
          <ValueCard
            title='Planetary pressures adjusted HDI'
            number={
              data.indicators.findIndex(
                d =>
                  d.indicator ===
                  'Planetary pressures adjusted Human Development Index (value)',
              ) === -1
                ? 'NA'
                : data.indicators[
                    data.indicators.findIndex(
                      d =>
                        d.indicator ===
                        'Planetary pressures adjusted Human Development Index (value)',
                    )
                  ].yearlyData[
                    data.indicators[
                      data.indicators.findIndex(
                        d =>
                          d.indicator ===
                          'Planetary pressures adjusted Human Development Index (value)',
                      )
                    ].yearlyData.length - 1
                  ].value
            }
            year={
              data.indicators.findIndex(
                d =>
                  d.indicator ===
                  'Planetary pressures adjusted Human Development Index (value)',
              ) === -1
                ? undefined
                : data.indicators[
                    data.indicators.findIndex(
                      d =>
                        d.indicator ===
                        'Planetary pressures adjusted Human Development Index (value)',
                    )
                  ].yearlyData[
                    data.indicators[
                      data.indicators.findIndex(
                        d =>
                          d.indicator ===
                          'Planetary pressures adjusted Human Development Index (value)',
                      )
                    ].yearlyData.length - 1
                  ].year
            }
          />
        ) : (
          <DataNACard graphTitle='Planetary pressures adjusted Human Development Index' />
        )}
        {data.indicators.findIndex(
          d => d.indicator === 'Material footprint per capita (tonnes)',
        ) !== -1 ? (
          <LineChart
            data={
              data.indicators[
                data.indicators.findIndex(
                  d => d.indicator === 'Material footprint per capita (tonnes)',
                )
              ].yearlyData
            }
            strokeWidth={1}
            lineColor='#232E3D'
            graphTitle='Material footprint per capita (tonnes)'
          />
        ) : (
          <DataNACard graphTitle='Gross National Income Per Capita (2017 PPP$)' />
        )}
      </div>
    </div>
  );
}

export default RegionViz;
