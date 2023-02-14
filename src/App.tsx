import { useEffect, useState } from 'react';
import { json } from 'd3-request';
import { LineChart } from './Components/LineChart';
import { CountryGroupDataType } from './Types';
import { ValueCard } from './Components/ValueCard';
import { DotPlot } from './Components/DotPlot';

function App() {
  const [data, setData] = useState<CountryGroupDataType | undefined>(undefined);
  useEffect(() => {
    json(
      'https://raw.githubusercontent.com/UNDP-Data/dv-signature_solutions_aggreated_timeseries-viz/master/public/data.json',
      (err: any, d: CountryGroupDataType) => {
        setData(d);
      },
    );
  }, []);
  return (
    <div
      className='undp-container'
      style={{ backgroundColor: 'var(--blue-600)', color: '#fff' }}
    >
      <div className='max-width flex-div flex-wrap flex-hor-align-center gap-00'>
        {data ? (
          <>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                width: '40%',
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
                lineColor='#fff'
                svgWidth={440}
                svgHeight={460}
                graphTitle='Poverty headcount ratio at $2.15 a day (2017 PPP) (% of population)'
                suffix='%'
              />
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                width: '30%',
              }}
            >
              <ValueCard
                title='people are multidimensionally poor.'
                number='1.2 Billion'
              />
              <DotPlot
                graphTitle='Vulnerable persons covered by social assistance'
                value={28.9}
                size={200}
              />
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                width: '30%',
              }}
            >
              <LineChart
                data={
                  data.indicators[
                    data.indicators.findIndex(
                      d =>
                        d.indicator ===
                        'Working poverty rate (percentage of employed living below US$1.90 PPP) (%)',
                    )
                  ].yearlyData
                }
                lineColor='#fff'
                suffix='%'
                strokeWidth={2}
                svgWidth={440}
                svgHeight={200}
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
                lineColor='#fff'
                strokeWidth={2}
                svgWidth={440}
                svgHeight={200}
                graphTitle='Inequality-adjusted HDI'
              />
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
}

export default App;
