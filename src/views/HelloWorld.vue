<template>
    <div class="hello">
        <!--<img src="local-resource://C:\Users\Lucas\Desktop\sizetest.jpg"
             alt="">-->
        <a-button type="primary"
                  @click="write">
            写入
        </a-button>
        <a-button type="primary"
                  @click="read">
            读取
        </a-button>
        <a-button type="primary"
                  @click="del">
            删除
        </a-button>
    </div>
</template>

<script>
export default {
    name: 'HelloWorld',
    props: {
        // eslint-disable-next-line vue/require-default-prop
        msg: String
    },
    methods: {
        write() {
            this.$store.set('unicorn', '🦄');
            console.log(this.$store.get('unicorn'));
        },
        read() {
            console.log(this.$store.get('unicorn'));
        },
        del() {
            this.$store.delete('unicorn');
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
    margin: 40px 0 0;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    display: inline-block;
    margin: 0 10px;
}

a {
    color: #42b983;
}
</style>
