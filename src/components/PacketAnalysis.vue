<template>
  <!--<v-flex xs12 sm6 offset-sm3>-->
  <div>
    <h1>Packet Analysis Forensics</h1>
    <br />

    <v-flex>
      <v-card>
        <!--<v-card-media src="/static/doc-images/cards/desert.jpg" height="200px">-->
        <!--</v-card-media>-->
        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">Wireshark</h3>
            <!--<div>Located two hours south of Sydney in the <br>Southern Highlands of New South Wales, ...</div>-->
            <!--<div>Name</div>-->
            <br />
            <div><span><b>Description:</b></span> <span>It is the most used Network Protocol analyzer</span></div>
            <div><b>Personal review:</b> It is a great GUI tool to use to analyse network packets, it is the leader on network packet analysis.</div>
            <div><b>Personal notes on usage:</b> Open Wireshark, select the network adapter to observe, capture the network traffic, save to a file, you can add display filters as to target the packets of interest, for example "ip.addr == 192.0.2.1"</div>
            <div><b>Source URL:</b> <a href="https://www.wireshark.org/" target="_blank">https://www.wireshark.org/</a></div>
            <div><b>Local Source: </b> N/A</div>
          </div>
        </v-card-title>
        <!--<v-card-actions>-->
        <!--<v-btn flat color="orange">Share</v-btn>-->
        <!--<v-btn flat color="orange">Explore</v-btn>-->
        <!--</v-card-actions>-->
      </v-card>
    </v-flex>
  </div>
</template>

<script>
export default {
  name: 'PacketAnalysis',
  data () {
    return {
      // msg: 'Welcome to Packet Analysis view',
      // card_text: 'Lorem ipsum dolor sit amet, brute iriure accusata ne mea. Eos suavitate referrentur ad, te duo agam libris qualisque, utroque quaestio accommodare no qui. Et percipit laboramus usu, no invidunt verterem nominati mel. Dolorem ancillae an mei, ut putant invenire splendide mel, ea nec propriae adipisci. Ignota salutandi accusamus in sed, et per malis fuisset, qui id ludus appareat.'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
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
