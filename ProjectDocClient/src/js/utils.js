
export default {
	getCookie: function(name) {
		var matches = document.cookie.match(new RegExp(
		  "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
		));
		return matches ? decodeURIComponent(matches[1]) : undefined;	
	},

	deleteCookie: function(name) {
		this.setCookie(name, "", {
    		expires: -1
		});
	},

	// name - название cookie
	// value - значение cookie (строка)
	// options - Объект с дополнительными свойствами для установки cookie:
	// expires - Время истечения cookie. Интерпретируется по-разному, в зависимости от типа:
	// 	 Число – количество секунд до истечения. Например, expires: 3600 – кука на час.
	// 	 Объект типа Date – дата истечения.
	// 	 Если expires в прошлом, то cookie будет удалено.
	// 	 Если expires отсутствует или 0, то cookie будет установлено как сессионное и исчезнет при закрытии браузера.
	// path - Путь для cookie.
	// domain - Домен для cookie.
	// secure - Если true, то пересылать cookie только по защищенному соединению.
	setCookie: function(name, value, options) {
		options = options || {};
		var expires = options.expires;

		if (typeof expires == "number" && expires) {
			var d = new Date();
			d.setTime(d.getTime() + expires * 1000);
			expires = options.expires = d;
		}
		if (expires && expires.toUTCString) {
			options.expires = expires.toUTCString();
		}

		value = encodeURIComponent(value);

		var updatedCookie = name + "=" + value;

		for (var propName in options) {
			updatedCookie += "; " + propName;
			var propValue = options[propName];
			if (propValue !== true) {
				updatedCookie += "=" + propValue;
			}
		}

		document.cookie = updatedCookie;
	}
};