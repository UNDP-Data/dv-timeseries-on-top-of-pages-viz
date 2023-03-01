import { DataNACard } from './Components/DataNACard';
import { LineChart } from './Components/LineChart';
import { ValueCard } from './Components/ValueCard';
import { CountryGroupDataType } from './Types';

interface Props {
  data: CountryGroupDataType;
}

const BureauList = [
  {
    code: 'AGO',
    bureau: 'Africa | RBA',
  },
  {
    code: 'BEN',
    bureau: 'Africa | RBA',
  },
  {
    code: 'BWA',
    bureau: 'Africa | RBA',
  },
  {
    code: 'BFA',
    bureau: 'Africa | RBA',
  },
  {
    code: 'BDI',
    bureau: 'Africa | RBA',
  },
  {
    code: 'CMR',
    bureau: 'Africa | RBA',
  },
  {
    code: 'CPV',
    bureau: 'Africa | RBA',
  },
  {
    code: 'CAF',
    bureau: 'Africa | RBA',
  },
  {
    code: 'TCD',
    bureau: 'Africa | RBA',
  },
  {
    code: 'COM',
    bureau: 'Africa | RBA',
  },
  {
    code: 'CoD',
    bureau: 'Africa | RBA',
  },
  {
    code: 'COG',
    bureau: 'Africa | RBA',
  },
  {
    code: 'CIV',
    bureau: 'Africa | RBA',
  },
  {
    code: 'GNQ',
    bureau: 'Africa | RBA',
  },
  {
    code: 'ERI',
    bureau: 'Africa | RBA',
  },
  {
    code: 'ETH',
    bureau: 'Africa | RBA',
  },
  {
    code: 'GAB',
    bureau: 'Africa | RBA',
  },
  {
    code: 'GMB',
    bureau: 'Africa | RBA',
  },
  {
    code: 'GHA',
    bureau: 'Africa | RBA',
  },
  {
    code: 'GIN',
    bureau: 'Africa | RBA',
  },
  {
    code: 'GNB',
    bureau: 'Africa | RBA',
  },
  {
    code: 'KEN',
    bureau: 'Africa | RBA',
  },
  {
    code: 'LSO',
    bureau: 'Africa | RBA',
  },
  {
    code: 'LBR',
    bureau: 'Africa | RBA',
  },
  {
    code: 'MDG',
    bureau: 'Africa | RBA',
  },
  {
    code: 'MWI',
    bureau: 'Africa | RBA',
  },
  {
    code: 'MLI',
    bureau: 'Africa | RBA',
  },
  {
    code: 'MRT',
    bureau: 'Africa | RBA',
  },
  {
    code: 'MUS',
    bureau: 'Africa | RBA',
  },
  {
    code: 'MOZ',
    bureau: 'Africa | RBA',
  },
  {
    code: 'NAM',
    bureau: 'Africa | RBA',
  },
  {
    code: 'NER',
    bureau: 'Africa | RBA',
  },
  {
    code: 'NGA',
    bureau: 'Africa | RBA',
  },
  {
    code: 'RWA',
    bureau: 'Africa | RBA',
  },
  {
    code: 'STP',
    bureau: 'Africa | RBA',
  },
  {
    code: 'SEN',
    bureau: 'Africa | RBA',
  },
  {
    code: 'SYC',
    bureau: 'Africa | RBA',
  },
  {
    code: 'SLE',
    bureau: 'Africa | RBA',
  },
  {
    code: 'ZAF',
    bureau: 'Africa | RBA',
  },
  {
    code: 'SSD',
    bureau: 'Africa | RBA',
  },
  {
    code: 'SWZ',
    bureau: 'Africa | RBA',
  },
  {
    code: 'TGO',
    bureau: 'Africa | RBA',
  },
  {
    code: 'UGA',
    bureau: 'Africa | RBA',
  },
  {
    code: 'TZA',
    bureau: 'Africa | RBA',
  },
  {
    code: 'ZMB',
    bureau: 'Africa | RBA',
  },
  {
    code: 'ZWE',
    bureau: 'Africa | RBA',
  },
  {
    code: 'AFG',
    bureau: 'Asia and the Pacific | RBAP',
  },
  {
    code: 'BGD',
    bureau: 'Asia and the Pacific | RBAP',
  },
  {
    code: 'BTN',
    bureau: 'Asia and the Pacific | RBAP',
  },
  {
    code: 'KHM',
    bureau: 'Asia and the Pacific | RBAP',
  },
  {
    code: 'CHN',
    bureau: 'Asia and the Pacific | RBAP',
  },
  {
    code: 'PRK',
    bureau: 'Asia and the Pacific | RBAP',
  },
  {
    code: 'FJI',
    bureau: 'Asia and the Pacific | RBAP',
  },
  {
    code: 'IND',
    bureau: 'Asia and the Pacific | RBAP',
  },
  {
    code: 'IDN',
    bureau: 'Asia and the Pacific | RBAP',
  },
  {
    code: 'IRN',
    bureau: 'Asia and the Pacific | RBAP',
  },
  {
    code: 'LAO',
    bureau: 'Asia and the Pacific | RBAP',
  },
  {
    code: 'MYS',
    bureau: 'Asia and the Pacific | RBAP',
  },
  {
    code: 'MDV',
    bureau: 'Asia and the Pacific | RBAP',
  },
  {
    code: 'MNG',
    bureau: 'Asia and the Pacific | RBAP',
  },
  {
    code: 'MMR',
    bureau: 'Asia and the Pacific | RBAP',
  },
  {
    code: 'NPL',
    bureau: 'Asia and the Pacific | RBAP',
  },
  {
    code: 'PAK',
    bureau: 'Asia and the Pacific | RBAP',
  },
  {
    code: 'PNG',
    bureau: 'Asia and the Pacific | RBAP',
  },
  {
    code: 'PHL',
    bureau: 'Asia and the Pacific | RBAP',
  },
  {
    code: 'WSM',
    bureau: 'Asia and the Pacific | RBAP',
  },
  {
    code: 'SLB',
    bureau: 'Asia and the Pacific | RBAP',
  },
  {
    code: 'LKA',
    bureau: 'Asia and the Pacific | RBAP',
  },
  {
    code: 'THA',
    bureau: 'Asia and the Pacific | RBAP',
  },
  {
    code: 'TLS',
    bureau: 'Asia and the Pacific | RBAP',
  },
  {
    code: 'VNM',
    bureau: 'Asia and the Pacific | RBAP',
  },
  {
    code: 'DZA',
    bureau: 'Arab States | RBAS',
  },
  {
    code: 'BHR',
    bureau: 'Arab States | RBAS',
  },
  {
    code: 'DJI',
    bureau: 'Arab States | RBAS',
  },
  {
    code: 'EGY',
    bureau: 'Arab States | RBAS',
  },
  {
    code: 'IRQ',
    bureau: 'Arab States | RBAS',
  },
  {
    code: 'JOR',
    bureau: 'Arab States | RBAS',
  },
  {
    code: 'KWT',
    bureau: 'Arab States | RBAS',
  },
  {
    code: 'LBN',
    bureau: 'Arab States | RBAS',
  },
  {
    code: 'LBY',
    bureau: 'Arab States | RBAS',
  },
  {
    code: 'MAR',
    bureau: 'Arab States | RBAS',
  },
  {
    code: 'PSE',
    bureau: 'Arab States | RBAS',
  },
  {
    code: 'YEM',
    bureau: 'Arab States | RBAS',
  },
  {
    code: 'SAU',
    bureau: 'Arab States | RBAS',
  },
  {
    code: 'SOM',
    bureau: 'Arab States | RBAS',
  },
  {
    code: 'SDN',
    bureau: 'Arab States | RBAS',
  },
  {
    code: 'SYR',
    bureau: 'Arab States | RBAS',
  },
  {
    code: 'TUN',
    bureau: 'Arab States | RBAS',
  },
  {
    code: 'ARE',
    bureau: 'Arab States | RBAS',
  },
  {
    code: 'ARG',
    bureau: 'Latin America and the Caribbean | RBLAC',
  },
  {
    code: 'BRB',
    bureau: 'Latin America and the Caribbean | RBLAC',
  },
  {
    code: 'BLZ',
    bureau: 'Latin America and the Caribbean | RBLAC',
  },
  {
    code: 'BOL',
    bureau: 'Latin America and the Caribbean | RBLAC',
  },
  {
    code: 'BRA',
    bureau: 'Latin America and the Caribbean | RBLAC',
  },
  {
    code: 'CHL',
    bureau: 'Latin America and the Caribbean | RBLAC',
  },
  {
    code: 'COL',
    bureau: 'Latin America and the Caribbean | RBLAC',
  },
  {
    code: 'CRI',
    bureau: 'Latin America and the Caribbean | RBLAC',
  },
  {
    code: 'CUB',
    bureau: 'Latin America and the Caribbean | RBLAC',
  },
  {
    code: 'DMA',
    bureau: 'Latin America and the Caribbean | RBLAC',
  },
  {
    code: 'DOM',
    bureau: 'Latin America and the Caribbean | RBLAC',
  },
  {
    code: 'ECU',
    bureau: 'Latin America and the Caribbean | RBLAC',
  },
  {
    code: 'SLV',
    bureau: 'Latin America and the Caribbean | RBLAC',
  },
  {
    code: 'GTM',
    bureau: 'Latin America and the Caribbean | RBLAC',
  },
  {
    code: 'GUY',
    bureau: 'Latin America and the Caribbean | RBLAC',
  },
  {
    code: 'HTI',
    bureau: 'Latin America and the Caribbean | RBLAC',
  },
  {
    code: 'HND',
    bureau: 'Latin America and the Caribbean | RBLAC',
  },
  {
    code: 'JAM',
    bureau: 'Latin America and the Caribbean | RBLAC',
  },
  {
    code: 'MEX',
    bureau: 'Latin America and the Caribbean | RBLAC',
  },
  {
    code: 'NIC',
    bureau: 'Latin America and the Caribbean | RBLAC',
  },
  {
    code: 'PAN',
    bureau: 'Latin America and the Caribbean | RBLAC',
  },
  {
    code: 'PRY',
    bureau: 'Latin America and the Caribbean | RBLAC',
  },
  {
    code: 'PER',
    bureau: 'Latin America and the Caribbean | RBLAC',
  },
  {
    code: 'SUR',
    bureau: 'Latin America and the Caribbean | RBLAC',
  },
  {
    code: 'TTO',
    bureau: 'Latin America and the Caribbean | RBLAC',
  },
  {
    code: 'URY',
    bureau: 'Latin America and the Caribbean | RBLAC',
  },
  {
    code: 'VEN',
    bureau: 'Latin America and the Caribbean | RBLAC',
  },
  {
    code: 'ALB',
    bureau: 'Europe and the CIS | RBEC',
  },
  {
    code: 'ARM',
    bureau: 'Europe and the CIS | RBEC',
  },
  {
    code: 'AZE',
    bureau: 'Europe and the CIS | RBEC',
  },
  {
    code: 'BLR',
    bureau: 'Europe and the CIS | RBEC',
  },
  {
    code: 'BIH',
    bureau: 'Europe and the CIS | RBEC',
  },
  {
    code: 'CYP',
    bureau: 'Europe and the CIS | RBEC',
  },
  {
    code: 'GEO',
    bureau: 'Europe and the CIS | RBEC',
  },
  {
    code: 'KAZ',
    bureau: 'Europe and the CIS | RBEC',
  },
  {
    code: 'XKX',
    bureau: 'Europe and the CIS | RBEC',
  },
  {
    code: 'KGZ',
    bureau: 'Europe and the CIS | RBEC',
  },
  {
    code: 'MNE',
    bureau: 'Europe and the CIS | RBEC',
  },
  {
    code: 'MKD',
    bureau: 'Europe and the CIS | RBEC',
  },
  {
    code: 'MDA',
    bureau: 'Europe and the CIS | RBEC',
  },
  {
    code: 'SRB',
    bureau: 'Europe and the CIS | RBEC',
  },
  {
    code: 'TJK',
    bureau: 'Europe and the CIS | RBEC',
  },
  {
    code: 'TUR',
    bureau: 'Europe and the CIS | RBEC',
  },
  {
    code: 'TKM',
    bureau: 'Europe and the CIS | RBEC',
  },
  {
    code: 'UKR',
    bureau: 'Europe and the CIS | RBEC',
  },
  {
    code: 'UZB',
    bureau: 'Europe and the CIS | RBEC',
  },
];

function CountryViz(props: Props) {
  const { data } = props;
  return (
    <>
      <div
        className='margin-bottom-06'
        style={{
          width: '100%',
        }}
      >
        <h2
          className='undp-typography margin-bottom-03'
          style={{
            fontFamily: 'SohneBreit,ProximaNova,sans-serif',
            fontWeight: 700,
            textTransform: 'uppercase',
            width: '100%',
          }}
        >
          {data['Country or Area']}
        </h2>
        <div className='flex-div gap-07 flex-wrap'>
          <h6 className='undp-typography'>Region: {data['Group 2']}</h6>
          <h6 className='undp-typography'>
            UNDP Bureau:{' '}
            {BureauList.findIndex(d => d.code === data['Alpha-3 code']) === -1
              ? '-'
              : BureauList[
                  BureauList.findIndex(d => d.code === data['Alpha-3 code'])
                ].bureau}
          </h6>
          <h6 className='undp-typography'>
            Income Group: {data['Income group']}
          </h6>
        </div>
      </div>
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
          }}
        >
          {data.indicators.findIndex(
            d => d.indicator === 'Population, total',
          ) !== -1 ? (
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
            gap: 'var(--spacing-09)',
          }}
        >
          {data.indicators.findIndex(
            d =>
              d.indicator === 'GDP per capita, PPP (current international $)',
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
    </>
  );
}

export default CountryViz;
