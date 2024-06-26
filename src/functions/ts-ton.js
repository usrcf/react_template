const BASE_TESTNET_URL = "https://testnet.tonapi.io/v2";
const TSTON_ADDRESS = "0:b0474ee6103836dadfd3608d685eb6f9951911501b662528e9286770fd32f607";
const PT_ADDRESS = "0:1ea3010118d0a82807c7d368ae0ba377723ae5797de2f879b40e9b40af3da310";
const YT_ADDRESS = "0:39a0e78d88cefb6353bc5b1068c92722c07ccc5202c21c82319aeb3fed4cc620";

async function fetchJettonsWallet(userAddress) {
    const url = new URL(BASE_TESTNET_URL + '/accounts/' + userAddress + '/jettons');
    const headers = {
        'accept': 'application/json'
    };

    try {
        const response = await fetch(url, {method: 'GET', headers});
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

function isFivaToken(address) {
    let out = address === TSTON_ADDRESS;
    out = out || address === PT_ADDRESS;
    out = out || address === YT_ADDRESS;
    return out;
}

function createTransactionCard(symbol, balance) {
    const card = document.createElement('div');
    card.className = 'transaction-cards';

    const yt = document.createElement('span');
    yt.className = 'yt';
    yt.textContent = symbol;

    const text6 = document.createElement('div');
    text6.className = 'text6';

    const left4 = document.createElement('div');
    left4.className = 'left4';

    const balanceElement = document.createElement('b');
    balanceElement.className = 'balance2';
    balanceElement.textContent = 'Balance';

    const apyElement = document.createElement('b');
    apyElement.className = 'apy';
    apyElement.textContent = 'APY';

    left4.appendChild(balanceElement);
    left4.appendChild(apyElement);

    const right5 = document.createElement('div');
    right5.className = 'right5';

    const b5 = document.createElement('b');
    b5.className = 'b5';
    b5.textContent = `${balance / 1000000000}`;

    right5.appendChild(b5);

    text6.appendChild(left4);
    text6.appendChild(right5);

    card.appendChild(yt);
    card.appendChild(text6);

    return card;
}

async function main(address) {
    const container = document.getElementById('jetton-wallets-container');
    const data = await fetchJettonsWallet(address);

    if (data && data.balances) {
        data.balances.forEach((balance) => {
            if (isFivaToken(balance.jetton.address)) {
                const card = createTransactionCard(balance.jetton.symbol, balance.balance, 18.67); // Используйте реальные данные для APY
                container.appendChild(card);
            }
        });
    }
}

main();
