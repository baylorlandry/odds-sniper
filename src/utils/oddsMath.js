export function americanToProb(odds){
    return odds>0?100/(odds+100):Math.abs(odds)/(Math.abs(odds)+100);
}
export function percentDiff(pPage,pMarket){
    return ((pMarket-pPage)/pMarket)*100;
}
