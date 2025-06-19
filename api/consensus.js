import axios from 'axios';
export default async function handler(req,res){
  const url=`https://api.the-odds-api.com/v4/sports/baseball_mlb/odds/?regions=us&markets=h2h&apiKey=${process.env.THE_ODDS_API_KEY}`;
  const {data}=await axios.get(url);
  const out={};
  for(const g of data){
    const home=[],away=[];
    for(const b of g.bookmakers){
      const ml=b.markets.find(m=>m.key==='h2h');if(!ml)continue;
      const [h,a]=ml.outcomes;home.push(h.price);away.push(a.price);
    }
    const median=a=>a.sort((x,y)=>x-y)[Math.floor(a.length/2)]||null;
    out[g.id]={home_ml:median(home),away_ml:median(away)};
  }
  return new Response(JSON.stringify(out),{headers:{'content-type':'application/json'}});
}
