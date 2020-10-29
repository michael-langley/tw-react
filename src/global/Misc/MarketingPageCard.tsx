import React from 'react';
import cx from 'classnames';
import '../../styles/marketing-page-card.css';

interface Props {
  title: string;
  body: React.ReactNode;
  actionElement: React.ReactNode;
  picture?: React.ReactNode;
  className?: string;
}

const MarketingPageCard = (props: Props) => {
  const { className, title, body, actionElement, picture } = props;
  const classes = cx('marketing-page-card', className);

  return (
    <div className={classes}>
      <h3 className="text-xl font-semibold tracking-tight leading-relaxed">{title}</h3>
      {picture && <div className="py-4">{picture}</div>}
      <p className="text-gray-700 leading-loose p-4 py-8 flex-1 overflow-y-scroll">{body}</p>
      <div className="p-1">{actionElement}</div>
    </div>
  );
};

export default MarketingPageCard;
