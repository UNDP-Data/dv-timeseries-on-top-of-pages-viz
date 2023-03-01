import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import CountryVizApp from './CountryVizApp';

const getEl = (embedSelector: string) => {
  if (typeof embedSelector === 'string') {
    const el = document.querySelector(embedSelector);
    if (!el) {
      // eslint-disable-next-line no-console
      console.warn(`No div matching selector "${embedSelector}"`);
      return null;
    }
    return el;
  }
  return embedSelector;
};

const getSS = (embedSelector: string) => {
  const el = document.querySelector(embedSelector);
  if (!el) {
    return undefined;
  }
  const elClass: string[] = el.className.split('~');
  if (elClass[0] === 'signatureSolution')
    return elClass[1].replaceAll('+', ' ');
  return undefined;
};

const getCountry = (embedSelector: string) => {
  const el = document.querySelector(embedSelector);
  if (!el) {
    return undefined;
  }
  const elClass: string[] = el.className.split('~');
  if (elClass[0] === 'country') return elClass[1].replaceAll('+', ' ');
  return undefined;
};

const containerEmbed = getEl('[data-bucket-top-graphs-embed]');
if (containerEmbed) {
  const rootEmbed = ReactDOM.createRoot(containerEmbed);
  rootEmbed.render(
    <React.StrictMode>
      <App signatureSolution={getSS('[data-bucket-top-graphs-embed]') || ''} />
    </React.StrictMode>,
  );
}

const containerCountryEmbed = getEl('[data-bucket-country-top-graphs-embed]');
if (containerCountryEmbed) {
  const rootEmbed = ReactDOM.createRoot(containerCountryEmbed);
  const currentURL = window.location;
  const countryCode =
    currentURL.href.split('?')[0].substr(-1) === '/'
      ? currentURL.href.split('?')[0].substr(-4).substring(0, 3)
      : currentURL.href.split('?')[0].substr(-3);
  rootEmbed.render(
    <React.StrictMode>
      <CountryVizApp
        country={
          getCountry('[data-bucket-country-top-graphs-embed]') || countryCode
        }
      />
    </React.StrictMode>,
  );
}
