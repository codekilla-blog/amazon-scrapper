const XRay = require('x-ray');
const fs = require('fs');

const x = XRay();

const url =
	'https://www.amazon.in/b/ref=s9_acss_bw_cg_CPACSM20_6c1_w?node=21505777031&pf_rd_m=A1K21FY43GMZF8&pf_rd_s=merchandised-search-20&pf_rd_r=5XSNDP2G44RCF9N66HD0&pf_rd_t=101&pf_rd_p=f987b4ed-d4a8-4c28-8154-cf72460802c9&pf_rd_i=1389401031';

x(url, '.s-result-list > li', [
	{
		path: '.a-link-normal@href',
		title: 'a h2',
		price: '.s-price',
	},
])
	.then(res => {
		console.log(res);

		fs.writeFileSync('data.json', JSON.stringify(res, null, 2));
	})
	.catch(err => {
		console.log('ERROR', err);
	});
