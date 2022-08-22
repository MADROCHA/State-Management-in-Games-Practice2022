export function drawStatusText(context, input, player){
    context.font = '30px Helvetica';
    context.fillText('Last input: ' + input.lastKey, 40, 80);
    context.fillText('Active State: ' + player.currentState.state, 40, 140);
}