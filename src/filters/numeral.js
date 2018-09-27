import numeral from 'numeral';
import Vue from 'vue';

/* set locale to Indonesia */
numeral.register('locale', 'id', {
  delimiters: {
    thousands: '.',
    decimal: ',',
  },
  abbreviations: {
    thousand: 'K',
    million: 'M',
    billion: 'B',
    trillion: 'T',
  },
  ordinal(number) {
    return number === 1 ? 'er' : 'ème';
  },
  currency: {
    symbol: 'Rp ',
  },
});

/* set locale for numeral */
numeral.locale('id');

Vue.filter('convertToRP', (value) => {
  if (!value) {
    return 'No Date';
  }
  return numeral(value).format('$0,0');
});
