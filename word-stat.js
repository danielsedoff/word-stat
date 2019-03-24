        function gbi(x) {
            return (document.getElementById(x));
        }

        function ws() {

            try {

                intxt = gbi("intxt").value.toLowerCase();
                intxt = intxt.replace(/[^а-яА-Яa-zA-Z0-9]+/g, " ");
                word = intxt.split(" ");
                word.sort();

                equ = [];
                num = [];
                outtxt = [];
                /* equalornot, numofrepeats, output text */
                ctr = 1 /* counter */

                for (i = 0; i < word.length; i++) {
                    if (word[i] == word[i + 1]) {
                        equ[i] = 1;
                    } else {
                        equ[i] = 0
                    };
                }

                for (i = 0; i < word.length; i++) {
                    if (equ[i] == 1) {
                        ctr++;
                        num[i] = 0;
                    } else {
                        num[i] = ctr;
                        ctr = 1;
                    };
                }

                for (i = 0; i < num.length; i++) {
                    if (num[i] > 0) {
                        temp = (1000000 + num[i]) + " " + word[i];
                        outtxt.push(temp.substring(1));
                    }
                }
                outtxt.sort();
                gbi("outtxt").value = outtxt.join("\n");
            } catch (err) {
                alert(err.value);
            }
        }

        function flush() {
            if (gbi("intxt").value == "Input your text here / Введите текст") {
                gbi("intxt").value = ""
            }
        }
