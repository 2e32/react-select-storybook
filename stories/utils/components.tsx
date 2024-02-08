import * as Icon from '../assets/icons/svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const Pre = ({ children }: { children: any }) => (
  <pre>{JSON.stringify(children, null, 2)}</pre>
);

export const EmptyOptionContent = () => (
  <div className="empty-option">
    <Icon.AlertCircleOutline width={36} height={36} />
    <div>No data available</div>
  </div>
);
