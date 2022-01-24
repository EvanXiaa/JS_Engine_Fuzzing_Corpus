
            const dt = new Date();
            const n2 = (n) => ("0" + n).substr(-2);
            const n3 = (n) => ("00" + n).substr(-3);
            return {
                y: dt.getFullYear(),
                m: n2(dt.getMonth()),
                d: n2(dt.getDate()),
                hms: `${n2(dt.getHours())}:${n2(dt.getMinutes())}:${n2(dt.getSeconds())}.${n3(dt.getMilliseconds())}`
            };

