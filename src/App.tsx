import { useEffect, useState } from 'react';
import { json } from 'd3-request';
import { CountryGroupDataType } from './Types';
import PovertyAndInequalityViz from './PovertyAndInequality';
import EnvironmentViz from './Environment';
import GenderViz from './Gender';
import GovernanceViz from './Governance';
import ResilienceViz from './Resilience';
import EnergyViz from './Energy';

interface Props {
  signatureSolution: string;
}

function App(props: Props) {
  const { signatureSolution } = props;
  const [data, setData] = useState<CountryGroupDataType | undefined>(undefined);
  useEffect(() => {
    json(
      'https://raw.githubusercontent.com/UNDP-Data/Access-All-Data-Data-Repo/main/regionData/WLD.json',
      (err: any, d: CountryGroupDataType) => {
        setData(d);
      },
    );
  }, []);
  return (
    <div
      className='undp-container padding-bottom-09 padding-top-09'
      style={{ backgroundColor: 'var(--gray-300)' }}
    >
      <div
        className='flex-div flex-wrap flex-hor-align-center gap-00'
        style={{ maxWidth: '1392px', margin: 'auto' }}
      >
        {data ? (
          signatureSolution === 'Poverty and Inequality' ? (
            <PovertyAndInequalityViz data={data} />
          ) : signatureSolution === 'Environment' ? (
            <EnvironmentViz data={data} />
          ) : signatureSolution === 'Gender' ? (
            <GenderViz data={data} />
          ) : signatureSolution === 'Governance' ? (
            <GovernanceViz data={data} />
          ) : signatureSolution === 'Resilience' ? (
            <ResilienceViz data={data} />
          ) : signatureSolution === 'Energy' ? (
            <EnergyViz data={data} />
          ) : null
        ) : null}
      </div>
    </div>
  );
}

export default App;
