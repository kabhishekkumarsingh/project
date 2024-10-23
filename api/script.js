const url = 'https://inspirational-quote-generator.p.rapidapi.com/quoteGenerator';
const options = {
  method: 'GET',
  headers: {
    'x-rapidapi-key': '7694a142a8mshb7981f0a9a68283p1d711ajsn32cc95dc8b57',
    'x-rapidapi-host': 'inspirational-quote-generator.p.rapidapi.com'
  }
};

async function fetchQuote() {
  try {
    const response = await fetch(url, options);
    const result = await response.json();
    document.getElementById('quote-container').innerHTML = `"${result.quote}" - ${result.author}`;
  } catch (error) {
    console.error(error);
  }
}

document.getElementById('btn').addEventListener('click', fetchQuote);
