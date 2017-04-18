;
(function() {
    var TEXT = {
        init: function() {
            userTxt="";

            this.submits();
        },
        submits:function(){
            var _this=this;
            $("#tijiao").click(function(event) {

                var inputVal=$('#demo').val();
                $('#demo').val('');
                 
                 _this.getData(inputVal);
            });
        },
        getData: function(userTxt) {

            var _this = this,
                cnTxt = '',
                otherTxt = '',
                text = '';

            for (var i = 0; i < userTxt.length; i++) {
                reg = userTxt[i].match(/[\u4e00-\u9fff0-9a-z]/ig);
                if (reg) {

                    if (otherTxt) {
                        text += '<span class="en">' + otherTxt + '</span>';
                        otherTxt = '';
                    };
                    cnTxt += userTxt[i]; 

                }else{
 
                    if (cnTxt) {
                        text += '<span class="cn">' + cnTxt + '</span>';
                        cnTxt = '';
                    };
                    otherTxt += userTxt[i];

                }
            };
            if (cnTxt) {
                text += '<span class="cn">' + cnTxt + '</span>';
            }else{
                text += '<span class="en">' + otherTxt + '</span>';
            };

            $('.text-hq').append(text);
        },

    }
    TEXT.init();
})();