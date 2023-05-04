import p from"react";
const Spotify=({
    link:e,
    style:r={},
    wide:t=!1,
    width:i=t?"100%":300,height:o=t?100:200,
    frameBorder:n=0,allow:s="encrypted-media",
    ...m
})=>{const a=new URL(e);
    return p.createElement("iframe",
    {title:"Spotify Web Player",
    src:`https://open.spotify.com/embed/playlist/4WvHCF3BuBSvWNtjdftawW?utm_source=generator${a.pathname}`,
    width:i,
    height:o,
    frameBorder:n,
    allow:s,
    style:{borderRadius:8,...r},...m}
)};

export default Spotify;
