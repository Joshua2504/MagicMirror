/* Magic Mirror Config Sample
 *
 * By Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information how you can configurate this file
 * See https://github.com/MichMich/MagicMirror#configuration
 *
 */

var config = {
	address: "0.0.0.0", // Address to listen on, can be:
	                      // - "localhost", "127.0.0.1", "::1" to listen on loopback interface
	                      // - another specific IPv4/6 to listen on a specific interface
	                      // - "", "0.0.0.0", "::" to listen on any interface
	                      // Default, when address config is left out, is "localhost"
	port: 11061,
	ipWhitelist: [], // Set [] to allow all IP addresses
	                                                       // or add a specific IPv4 of 192.168.1.5 :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
	                                                       // or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	language: "de",
	timeFormat: 24,
	units: "metric",

	modules: [
		{
			module: "alert",
		},
		{
			module: "updatenotification",
			position: "top_bar"
		},
		{
			module: "clock",
			position: "top_left"
		},
		//{
		//	module: "calendar",
		//	header: "Terminübersicht",
		//	position: "top_left",
		//	config: {
		//		calendars: [
		//			{
		//				symbol: "male",
		//				url: "webcal://calendar.google.com/calendar/ical/jotreudler%40gmail.com/private-daf12dc1534fcfb465aea6dd8ebf9da9/basic.ics"
		//			},
		//			{
		//				symbol: "female",
		//				url: "webcal://calendar.google.com/calendar/ical/s.treudler61%40gmail.com/private-d9e3e95ec86249137e0ede36c1f4235a/basic.ics"
		//			}
		//		]
		//	}
		//},
		{
			module: "currentweather",
			position: "top_right",
			config: {
				location: "Langen",
				locationID: "2881276",  //ID from http://www.openweathermap.org/help/city_list.txt
				appid: "71cdc92c241cfdcecafcd0a1a244775a"
			}
		},
		//{
		//	module: "weatherforecast",
		//	position: "top_center",
		//	header: "Weather Forecast",
		//	config: {
		//		location: "New York",
		//		locationID: "2881276",  //ID from http://www.openweathermap.org/help/city_list.txt
		//		appid: "71cdc92c241cfdcecafcd0a1a244775a"
		//	}
		//},
		//{
	//{		module: "newsfeed",
	//{		position: "bottom_bar",
	//{		config: {
	//{			feeds: [
	//{				{
	//{					title: "Tagesschau",
	//{					url: "http://www.tagesschau.de/xml/rss2/"
	//{				}
	//{			],
	//{			showSourceTitle: true,
	//{			showPublishDate: true
	//{		}
	//{	},
		{
			module: 'MMM-Remote-Control'
		},
		{
			module: 'MMM-CalendarExt',
			position: "top_left",
			config: {
				system: {
					show: ['month'],
					locale: 'de', //when omitted, default value would be your system default locale by moment.js
					redrawInterval: 60*1000, //minimum 60000
				},
				views: {
					daily: {
						title: "upcoming",
						position: "top_right",
						positionOrder: 2,
						styleName: "style2",
						counts: 1,
						oneLineEvent: 0
					},
					month: {
						counts: 1
					},
				},
				calendars: [
				{
					name: "Joshua",
					url: "https://calendar.google.com/calendar/ical/jotreudler%40gmail.com/private-daf12dc1534fcfb465aea6dd8ebf9da9/basic.ics",
					symbol: 'child',
					styleName: "joshua",
					views: []
				},
				{
					name: "Mama",
					url: "https://calendar.google.com/calendar/ical/s.treudler61%40gmail.com/private-d9e3e95ec86249137e0ede36c1f4235a/basic.ics",
					symbol: 'female@fa',
					styleName: "sabine"
				},
				{
					name: "Garten",
					url: "https://calendar.google.com/calendar/ical/b7qm99ijco508rt9lurhp68hk4%40group.calendar.google.com/private-59aa949383c4d8a450d2486a6bc001ff/basic.ics",
					symbol: 'pagelines',
					styleName: "garten"
				},
				{
					name: "Abfuhrkalender",
					url: "https://calendar.google.com/calendar/ical/no9gakh2ljhl7iroi9cj6cjt4k%40group.calendar.google.com/private-645975f2b8f33f511bff13a782ccbc14/basic.ics",
					symbol: 'trash',
					styleName: "muell"
				}
			]
		},
},
	//	{
	//		module: "MMM-Fuel",
	//		position: "top_right",
	//		config: {
	//			provider: "tankerkoenig",
	//			api_key: "39767699-5a96-624b-be9c-c80710634c0f",
		////	lng: 8.600791,
			//	types: ["e10"],
			//	showopenonly: "true",
			//	max: 5,
			//	radius: 10
			//}
		//},
		////     module: 'MMM-GoogleMapsTraffic',
       //     position: 'top_left',
       //     config: {
       //         key: 'AIzaSyATffX888J5W4M9hkRJQI5o0H3jEE6UYDw',
		//		lat: 53.627160,
		//		lng: 8.600791,
       //         height: '300px',
      //          width: '300px',
	//			zoom: 70
     //       }
     //   },
	//	{
		//	module: 'MMM-DWD-WarnWeather',
		//	position: 'top_right',
		//	header: 'Wetterwarnungen',
		//		config: {
		//		region: 'Cuxhaven',
		//		changeColor: true,
		//		minutes: false,
		//		displayRegionName: false,
		//		interval: 10 * 60 * 1000, // every 10 minutes
		//		loadingText: 'Warnungen werden geladen...',
		//		noWarningText: 'Keine Warnungen'
		//	}
//		}
	]

};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
