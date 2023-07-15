const message = 'hElLo WoRlD';
(
    function(){
        const message = 'hello world'
        console.log(message);
    }
)();

var object = {
    key1: 'string',
    key2: true,
    key3: function () {
        // this === currentScope
        console.log(this.key1);
        console.log(this.key2);
    }
}

object.key3();