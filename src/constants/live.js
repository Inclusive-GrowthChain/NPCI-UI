import getRandom from '../helper/getRandom';

const type = ["Tokenized", "Detokenized", "Sale", "Purchase"]

const live = [
  {
    isin: "INE00XE07101",
    issuerName: "MUTHOOT VEHICLE & ASSET FINANCE LIMITED",
    couponRate: "9.5 %",
    faceValue: 1,
    ltp: 1.015,
    creditRating: "CRISIL A/Stable;CARE BBB+",
    maturityDate: "05/17/2023",
    noOfToken: 400000,
    bidPrice: 0.98,
    askPrice: 1.015,
    securityDescription: "MUTHOOT VEHICLE & ASSET FINANCE LIMITED OPTION II 9.50 NCD 17MY23 FVRS1000",
    transactionType: type[getRandom(0, 3)],
    purchasePrice: 0,
    currentPrice: 0,
    noOfLots: getRandom(1, 5),
    transactionId: getRandom(10, 100),
    transactionAmount: getRandom(25, 100),
  },
  {
    isin: "INE01I507042",
    issuerName: "KLM AXIVA FINVEST LIMITED",
    couponRate: "12 %",
    faceValue: 1,
    ltp: 0.98,
    creditRating: "CARE BB+/Stable",
    maturityDate: "11/05/2023",
    noOfToken: 200000,
    bidPrice: 0.96,
    askPrice: 0.98,
    securityDescription: "KLM AXIVA FINVEST LIMITED OPT IV 12 LOA 05NV23 FVRS1000",
    transactionType: type[getRandom(0, 3)],
    purchasePrice: 0,
    currentPrice: 0,
    noOfLots: getRandom(1, 5),
    transactionId: getRandom(10, 100),
    transactionAmount: getRandom(25, 100),
  },
  {
    isin: "INE027E07923",
    issuerName: "L&T FINANCE LIMITED",
    couponRate: "9.1 %",
    faceValue: 1,
    ltp: 1.12,
    creditRating: "IND AAA/Stable;ICRA AAA/Stable;CARE AAA/Stable",
    maturityDate: "09/08/2032",
    noOfToken: 800000,
    bidPrice: 1.02,
    askPrice: 1.12,
    securityDescription: "L&T FINANCE LIMITED SR III OPT 1 9.1 LOA 13MR24 FVRS1000",
    transactionType: type[getRandom(0, 3)],
    purchasePrice: 0,
    currentPrice: 0,
    noOfLots: getRandom(1, 5),
    transactionId: getRandom(10, 100),
    transactionAmount: getRandom(25, 100),
  },
  {
    isin: "INE033L07FZ3",
    issuerName: "TATA CAPITAL HOUSING FINANCE LIMITED",
    couponRate: "8.8 %",
    faceValue: 1,
    ltp: 0.89,
    creditRating: "CRISIL AAA/Stable",
    maturityDate: "09/25/2023",
    noOfToken: 600000,
    bidPrice: 0.86,
    askPrice: 0.89,
    securityDescription: "TATA CAPITAL HOUSING FINANCE LIMITED 8.8 NCD 25SP23 FVRS1000",
    transactionType: type[getRandom(0, 3)],
    purchasePrice: 0,
    currentPrice: 0,
    noOfLots: getRandom(1, 5),
    transactionId: getRandom(10, 100),
    transactionAmount: getRandom(25, 100),
  },
  {
    isin: "INE101Q07391",
    issuerName: "MUTHOOTTU MINI FINANCIERS LTD",
    couponRate: "10 %",
    faceValue: 1,
    ltp: 0.99,
    creditRating: "IND A-/Stable",
    maturityDate: "04/24/2024",
    noOfToken: 1000000,
    bidPrice: 0.95,
    askPrice: 0.99,
    securityDescription: "MUTHOOTTU MINI FINANCIERS LTD SERIES VIII-V 10 NCD 24AP24 FVRS1000",
    transactionType: type[getRandom(0, 3)],
    purchasePrice: 0,
    currentPrice: 0,
    noOfLots: getRandom(1, 5),
    transactionId: getRandom(10, 100),
    transactionAmount: getRandom(25, 100),
  },
  {
    isin: "INE039A07801",
    issuerName: "IFCI LIMITED",
    couponRate: "9.9 %",
    faceValue: 1,
    ltp: 1.14,
    creditRating: "ICRA B+/Negative;BWR BB/Negative",
    maturityDate: "12/01/2024",
    noOfToken: 400000,
    bidPrice: 1.12,
    askPrice: 1.14,
    securityDescription: "IFCI LIMITED SR-VI 9.9 NCD 01DC24 FVRS1000 LOA UPTO 17MY15",
    transactionType: type[getRandom(0, 3)],
    purchasePrice: 0,
    currentPrice: 0,
    noOfLots: getRandom(1, 5),
    transactionId: getRandom(10, 100),
    transactionAmount: getRandom(25, 100),
  },
  {
    isin: "INE217K07AF7",
    issuerName: "RELIANCE HOME FINANCE LIMITED",
    couponRate: "9 %",
    faceValue: 1,
    ltp: 0.98,
    creditRating: "CRISIL AAA / Stable",
    maturityDate: "11/04/2025",
    noOfToken: 800000,
    bidPrice: 1,
    askPrice: 0.98,
    securityDescription: "RELIANCE HOME FINANCE LIMITED SR-III CAT I & II 9 NCD 03JN27 FVRS1000",
    transactionType: type[getRandom(0, 3)],
    purchasePrice: 780000,
    currentPrice: 785600,
    noOfLots: getRandom(1, 5),
    transactionId: getRandom(10, 100),
    transactionAmount: getRandom(25, 100),
  },
  {
    isin: "INE219X07173",
    issuerName: "INDIA GRID TRUST",
    couponRate: "6.65 %",
    faceValue: 1,
    ltp: 1.25,
    creditRating: "IND AAA/Stable ;CRISIL AAA/Stable",
    maturityDate: "05/06/2024",
    noOfToken: 600000,
    bidPrice: 1.21,
    askPrice: 1.25,
    securityDescription: "INDIA GRID TRUST SR I CAT I&II 6.65 NCD 06MY24 FVRS1000",
    transactionType: type[getRandom(0, 3)],
    purchasePrice: 650000,
    currentPrice: 750000,
    noOfLots: getRandom(1, 5),
    transactionId: getRandom(10, 100),
    transactionAmount: getRandom(25, 100),
  },
  {
    isin: "INE342T07189",
    issuerName: "NAVI FINSERV LIMITED",
    couponRate: "9.2 %",
    faceValue: 1,
    ltp: 0.79,
    creditRating: "IND A/Stable",
    maturityDate: "03/28/2024",
    noOfToken: 200000,
    bidPrice: 0.77,
    askPrice: 0.79,
    securityDescription: "NAVI FINSERV LIMITED SR I 9.20 NCD 08DC23 FVRS1000",
    transactionType: type[getRandom(0, 3)],
    purchasePrice: 0,
    currentPrice: 0,
    noOfLots: getRandom(1, 5),
    transactionId: getRandom(10, 100),
    transactionAmount: getRandom(25, 100),
  },
  {
    isin: "INE774D07ST5",
    issuerName: "MAHINDRA & MAHINDRA FINANCIAL SERVICES LTD",
    couponRate: "9.1 %",
    faceValue: 1,
    ltp: 1.311,
    creditRating: "IND AAA/Stable ;CARE AAA/Stable",
    maturityDate: "01/18/2024",
    noOfToken: 1000000,
    bidPrice: 1.11,
    askPrice: 1.311,
    securityDescription: "MAHINDRA & MAHINDRA FINANCIAL SERVICES LTD SRIICATI&II9.10NCD 18JN24FV1000 LOAUPTO21JN19",
    transactionType: type[getRandom(0, 3)],
    purchasePrice: 1256000,
    currentPrice: 1300000,
    noOfLots: getRandom(1, 5),
    transactionId: getRandom(10, 100),
    transactionAmount: getRandom(25, 100),
  },
  {
    isin: "INE804I075Y4",
    issuerName: "ECL FINANCE LIMITED",
    couponRate: "9.25 %",
    faceValue: 1,
    ltp: 0.87,
    creditRating: "CRISIL AA-/Negative;ICRA A+/Stable ()",
    maturityDate: "06-08-2023",
    noOfToken: 200000,
    bidPrice: 0.85,
    askPrice: 0.87,
    securityDescription: "ECL FINANCE LIMITED SR-III 9.25 NCD 06AG23 FVRS1000",
    transactionType: type[getRandom(0, 3)],
    purchasePrice: 0,
    currentPrice: 0,
    noOfLots: getRandom(1, 5),
    transactionId: getRandom(10, 100),
    transactionAmount: getRandom(25, 100),
  },
  {
    isin: "INE872A07UQ5",
    issuerName: "SREI EQUIPMENT FINANCE LIMITED",
    couponRate: "8.65 %",
    faceValue: 1,
    ltp: 1.31,
    creditRating: "BWR D",
    maturityDate: "16-03-2023",
    noOfToken: 800000,
    bidPrice: 1.29,
    askPrice: 1.31,
    securityDescription: "SREI EQUIPMENT FINANCE LTD SR-VI 8.65 LOA 16MR23 FVRS1000",
    transactionType: type[getRandom(0, 3)],
    purchasePrice: 0,
    currentPrice: 0,
    noOfLots: getRandom(1, 5),
    transactionId: getRandom(10, 100),
    transactionAmount: getRandom(25, 100),
  },
  {
    isin: "INE918K07FP8",
    issuerName: "NUVAMA WEALTH FINANCE LIMITED",
    couponRate: "10 %",
    faceValue: 1,
    ltp: 1.05,
    creditRating: "CRISIL AA-/Stable;CARE AA-/Stable ()",
    maturityDate: "05-02-2023",
    noOfToken: 600000,
    bidPrice: 1.03,
    askPrice: 1.05,
    securityDescription: "NUVAMA WEALTH FINANCE LIMITED SR III 10 NCD 05FB23 FVRS1000",
    transactionType: type[getRandom(0, 3)],
    purchasePrice: 0,
    currentPrice: 0,
    noOfLots: getRandom(1, 5),
    transactionId: getRandom(10, 100),
    transactionAmount: getRandom(25, 100),
  },
  {
    isin: "INE945W07399",
    issuerName: "INCRED FINANCIAL SERVICES LIMITED",
    couponRate: "9.25 %",
    faceValue: 1,
    ltp: 0.971,
    creditRating: "CRISIL A+/Stable ()",
    maturityDate: "18-02-2024",
    noOfToken: 400000,
    bidPrice: 0.953,
    askPrice: 0.971,
    securityDescription: "INCRED FINANCIAL SERVICES LIMITED SR 2 9.25 NCD 18FB24 FVRS1000",
    transactionType: type[getRandom(0, 3)],
    purchasePrice: 0,
    currentPrice: 0,
    noOfLots: getRandom(1, 5),
    transactionId: getRandom(10, 100),
    transactionAmount: getRandom(25, 100),
  },
  {
    isin: "INE884Q07061",
    issuerName: "MIDLAND MICROFIN LIMITED",
    couponRate: "12 %",
    faceValue: 1,
    ltp: 0.89,
    creditRating: "CARE BBB/Positive ()",
    maturityDate: "04-01-2024",
    noOfToken: 800000,
    bidPrice: 0.87,
    askPrice: 0.89,
    securityDescription: "MIDLAND MICROFIN LIMITED OPT 6 12 NCD 04JN24 FVRS10000",
    transactionType: type[getRandom(0, 3)],
    purchasePrice: 0,
    currentPrice: 0,
    noOfLots: getRandom(1, 5),
    transactionId: getRandom(10, 100),
    transactionAmount: getRandom(25, 100),
  },
  {
    isin: "INE866I08279",
    issuerName: "IIFL FINANCE LIMITED",
    couponRate: "10 %",
    faceValue: 1,
    ltp: 1.16,
    creditRating: "CRISIL AA/Stable;ICRA AA/Stable;BWR AA+/Stable",
    maturityDate: "07-02-2029",
    noOfToken: 1200000,
    bidPrice: 1.09,
    askPrice: 1.16,
    securityDescription: "IIFL FINANCE LIMITED SR V 10 NCD 07FB29 FVRS1000",
    transactionType: type[getRandom(0, 3)],
    purchasePrice: 0,
    currentPrice: 0,
    noOfLots: getRandom(1, 5),
    transactionId: getRandom(10, 100),
    transactionAmount: getRandom(25, 100),
  },
  {
    isin: "INE774D08LT8",
    issuerName: "MAHINDRA & MAHINDRA FINANCIAL SERVICES LTD",
    couponRate: "8.53 %",
    faceValue: 1,
    ltp: 1,
    creditRating: "IND AAA/Stable ();CARE AAA/Stable ()",
    maturityDate: "06-06-2026",
    noOfToken: 2000000,
    bidPrice: 0.99,
    askPrice: 1,
    securityDescription: "MAHINDRA & MAHINDRA FINANCIAL SERVICES LTD SR-III8.53 NCD06JU26FVRS1000LOAUPTO24JL16",
    transactionType: type[getRandom(0, 3)],
    purchasePrice: 0,
    currentPrice: 0,
    noOfLots: getRandom(1, 5),
    transactionId: getRandom(10, 100),
    transactionAmount: getRandom(25, 100),
  },
  {
    isin: "INE721A07PE0",
    issuerName: "SHRIRAM FINANCE LIMITED",
    couponRate: "9.7 %",
    faceValue: 1,
    ltp: 1.11,
    creditRating: "CARE AA+/Stable ();IND AA+/Stable ();CRISIL AA+/Stable",
    maturityDate: "22-08-2026",
    noOfToken: 400000,
    bidPrice: 1.09,
    askPrice: 1.11,
    securityDescription: "SHRIRAM FINANCE LIMITED SERIES VII NCD 9.70 22AG26 FVRS1000",
    transactionType: type[getRandom(0, 3)],
    purchasePrice: 0,
    currentPrice: 0,
    noOfLots: getRandom(1, 5),
    transactionId: getRandom(10, 100),
    transactionAmount: getRandom(25, 100),
  },
  {
    isin: "INE651J07606",
    issuerName: "JM FINANCIAL CREDIT SOLUTIONS LIMITED",
    couponRate: "9.5 %",
    faceValue: 1,
    ltp: 0.88,
    creditRating: "IND AA/Stable ();ICRA AA/Stable",
    maturityDate: "07-06-2023",
    noOfToken: 600000,
    bidPrice: 0.86,
    askPrice: 0.88,
    securityDescription: "JM FINANCIAL CREDIT SOLUTIONS LIMITED TR 1 OPT III 9.5 NCD 07JU23 FVRS1000",
    transactionType: type[getRandom(0, 3)],
    purchasePrice: 0,
    currentPrice: 0,
    noOfLots: getRandom(1, 5),
    transactionId: getRandom(10, 100),
    transactionAmount: getRandom(25, 100),
  },
  {
    isin: "INE583D07240",
    issuerName: "UGRO CAPITAL LIMITED",
    couponRate: "10 %",
    faceValue: 1,
    ltp: 1,
    creditRating: "ACUITE A/Stable ()",
    maturityDate: "04-11-2023",
    noOfToken: 800000,
    bidPrice: 0.97,
    askPrice: 1,
    securityDescription: "UGRO CAPITAL LIMITED SR I 10 NCD 04NV23 FVRS1000",
    transactionType: type[getRandom(0, 3)],
    purchasePrice: 0,
    currentPrice: 0,
    noOfLots: getRandom(1, 5),
    transactionId: getRandom(10, 100),
    transactionAmount: getRandom(25, 100),
  },
].map((f, i) => ({ id: i, ...f }))

export default live