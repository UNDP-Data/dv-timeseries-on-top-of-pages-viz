import { useEffect, useState } from 'react';
import { json } from 'd3-request';
import { CountryGroupDataType } from './Types';
import RegionViz from './RegionViz';

interface Props {
  region?: string;
}

function RegionVizApp(props: Props) {
  const { region } = props;
  const [data, setData] = useState<CountryGroupDataType | undefined>(undefined);
  useEffect(() => {
    json(
      `https://raw.githubusercontent.com/UNDP-Data/Access-All-Data-Data-Repo/main/regionData/UNDP_${region}.json`,
      (err: any, d: CountryGroupDataType) => {
        setData(d);
      },
    );
  }, []);
  return (
    <div
      className='undp-container padding-bottom-09 padding-top-11'
      style={{ backgroundColor: 'var(--gray-300)' }}
    >
      <div
        className='flex-div flex-wrap flex-hor-align-center gap-00'
        style={{ maxWidth: '1392px', margin: 'auto' }}
      >
        {data ? <RegionViz data={data} /> : null}
      </div>
    </div>
  );
}

export default RegionVizApp;
