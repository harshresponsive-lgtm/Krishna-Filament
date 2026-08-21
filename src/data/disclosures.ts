export type DisclosureItem = {
	srNo: number;
	particulars: string;
	reference: string | null;
};

export const disclosureItems: DisclosureItem[] = [
	{ srNo: 1, particulars: 'Details of business', reference: null },
	{
		srNo: 2,
		particulars: 'Memorandum of Association and Articles of Association',
		reference: null,
	},
	{
		srNo: 3,
		particulars:
			'Brief profile of board of directors including directorship and full-time positions in body corporates',
		reference: null,
	},
	{
		srNo: 4,
		particulars: 'Terms and Conditions of appointment of Independent Directors',
		reference: null,
	},
	{
		srNo: 5,
		particulars: 'Composition of various committees of Board of Directors',
		reference: null,
	},
	{
		srNo: 6,
		particulars:
			'Code of Conduct of Board of Directors and Senior Management Personnel',
		reference: null,
	},
	{
		srNo: 7,
		particulars: 'Details of Establishment of Vigil Mechanism/ Whistle Blower Policy',
		reference: null,
	},
	{
		srNo: 8,
		particulars:
			'Criteria of making payments to Non-Executive Directors, if the same has not been disclosed in annual report',
		reference: null,
	},
	{
		srNo: 9,
		particulars: 'Policy on dealing with related party transactions (RPT)',
		reference: null,
	},
	{
		srNo: 10,
		particulars: "Policy for determining 'material' subsidiaries",
		reference: null,
	},
	{
		srNo: 11,
		particulars: 'Details of familiarization programmes imparted to Independent Directors',
		reference: null,
	},
	{
		srNo: 12,
		particulars: 'The email address for grievance redressal and other relevant details',
		reference: null,
	},
	{
		srNo: 13,
		particulars:
			'Contact information of the designated officials of the listed entity who are responsible for assisting and handling investor grievances',
		reference: null,
	},
	{
		srNo: 14,
		particulars:
			'Notice of meeting of the Board of Directors where financial results shall be discussed',
		reference: null,
	},
	{
		srNo: 15,
		particulars:
			'Financial Results, on conclusion of the meeting of the board of directors where the financial results were approved',
		reference: null,
	},
	{ srNo: 16, particulars: 'Annual Report', reference: null },
	{ srNo: 17, particulars: 'Shareholding Pattern', reference: null },
	{
		srNo: 18,
		particulars:
			'Details of agreements entered into with the media companies and/or their associates, etc',
		reference: 'Not Applicable',
	},
	{
		srNo: 19,
		particulars: 'Schedule of analysts or institutional investors meet',
		reference: null,
	},
	{
		srNo: 20,
		particulars:
			'Presentations prepared by the listed entity for analysts or institutional investors meet, post earnings or quarterly calls',
		reference: null,
	},
	{
		srNo: 21,
		particulars:
			'Audio recordings, video recordings, if any, and transcripts of post earnings or quarterly calls',
		reference: 'Not Applicable',
	},
	{
		srNo: 22,
		particulars:
			'New name and the old name of the listed entity for a continuous period of one year, from the date of the last name change',
		reference: 'Not Applicable',
	},
	{ srNo: 23, particulars: 'Financial results published in newspaper', reference: null },
	{ srNo: 24, particulars: 'Credit Ratings', reference: null },
	{
		srNo: 25,
		particulars: 'Separate Audited Financial Statements of each subsidiary',
		reference: null,
	},
	{ srNo: 26, particulars: 'Secretarial Compliance Report', reference: null },
	{
		srNo: 27,
		particulars: 'Policy for determination of materiality of events or information',
		reference: null,
	},
	{
		srNo: 28,
		particulars:
			'Contact details of Key Managerial Personnel who are authorized for the purpose of determining materiality of an event or information',
		reference: null,
	},
	{
		srNo: 29,
		particulars: 'Disclosures under Regulation 30 of SEBI (LODR) Regulations, 2015',
		reference: null,
	},
	{ srNo: 30, particulars: 'Statements of deviation(s) or variation(s)', reference: 'Not Applicable' },
	{ srNo: 31, particulars: 'Dividend Distribution Policy', reference: null },
	{ srNo: 32, particulars: 'Annual Return', reference: null },
	{ srNo: 33, particulars: 'Employee Benefit Scheme Documents', reference: 'Not Applicable' },
];
