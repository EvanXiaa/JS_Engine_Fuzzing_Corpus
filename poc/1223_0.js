
new Intl.DateTimeFormat('ar', {hour: '2-digit', hour12: false}).format(new Date(2015,05,1,9,0,0))
>"‎٠٩‎:‎00"


new Intl.DateTimeFormat('ar', {hour: '2-digit', hour12: false, minute:'2-digit'}).format(new Date(2015,05,1,9,0,0))
>"‎٠٩‎:‎٠٠"


new Intl.DateTimeFormat('ar', {hour: '2-digit', hour12: false}).format(new Date(2015,05,1,9,0,0))
>"٠٩"

