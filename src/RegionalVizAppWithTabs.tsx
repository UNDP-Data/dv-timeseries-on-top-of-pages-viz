import { Tabs } from 'antd';
import { SubRegionsDataType } from './Types';
import RegionVizApp from './RegionalVizApp';

interface Props {
  subRegions: SubRegionsDataType[];
}

function RegionVizAppWithTabs(props: Props) {
  const { subRegions } = props;
  return (
    <div
      className='undp-container padding-bottom-00 padding-top-00'
      style={{
        backgroundColor: 'var(--gray-300)',
      }}
    >
      <div
        className='flex-div flex-wrap flex-hor-align-center gap-00'
        style={{ maxWidth: '1392px', margin: 'auto' }}
      >
        <Tabs
          defaultActiveKey={subRegions[0].key}
          className='undp-tabs'
          items={subRegions.map(d => ({
            label: d.region,
            key: d.key,
            children: <RegionVizApp region={d.key} />,
          }))}
        />
      </div>
    </div>
  );
}

export default RegionVizAppWithTabs;
