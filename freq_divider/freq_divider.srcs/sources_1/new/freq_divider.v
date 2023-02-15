`timescale 1ns / 1ps

module freq_divider(
input clk,
output reg [1:0] led
    );
    
    reg divide_clk = 'd0;
    reg [26:0] counter = 'd0; //for a 50Hz clock signal, need approximately 2.684s. to count up to the maximum.
    reg [26:0] divider_counter = 'd0; //It'll take abount 5.368s
    
    wire is_end;
    wire is_end_div;
    assign is_end = (counter == 27'b111_1111_1111_1111_1111_1111_1111); 
    assign is_end_div = (divider_counter == 27'b111_1111_1111_1111_1111_1111_1111); 
    
    always@ (posedge clk) begin
        divide_clk <= !divide_clk; //frequency divided by 2
        
        if(!is_end) begin
            counter <= counter + 1;
            led[0] <= led[0];
        end
        else begin
            counter <= 'd0;
            led[0] <= !led[0];
        end 
    end
    

    always@ (posedge divide_clk) begin
        if(!is_end_div) begin
            divider_counter <= divider_counter + 1;
            led[1] <= led[1];
        end
        else begin
            divider_counter <= 'd0;
            led[1] <= !led[1];
        end
    end
 
endmodule
