        function maker(){
        	
        	return{
        	sum:function(arr){
        		var sum = 0;
        		for(var i = 0;i<arr.length;i++){
        			sum+=arr[i];
        		}
        		return sum;
        	
        		},
        	insert:function(arr,item,index){
        		var len = arr.length;
        		//for(var i)
        		if(index < len){
        			for(var i = arr.length;i>index;i--){
                        arr[i]=arr[i-1];
        			}
        			
        		}
                arr[index]=item;
               console.log("After insertion");
        		console.log(arr);
        		}
        	      ,
            remov:function(arr,item){
                for(var i=0;i<arr.length;i++){
                    if(arr[i]==item){
                        arr.splice(i,1);
                    }
                }
                console.log(arr);
            },
            append:function(arr,item){
                var index=arr.length;
                arr[index]=item;
                console.log(arr);
            },
            prepend:function(arr,item){
                for(var i=arr.length;i>0;i--){
                    array[i]=arr[i-1];
                }
                array[0]=item;
                console.log(arr);
            },
            concat:function(arr1,arr2){
                var len=arr1.length+arr2.length;
                var j=0;
                for(var i=arr1.length;i<len;i++){
                    arr1[i]=arr2[j];
                    j++;
                }
                console.log(arr1);
            },
            count:function(arr,item){
                for(var i=0;i<arr.length;i++){
                    
                }
            }


        }
    }           

        var obj=maker();
        var array=[10,30,50];
        //sum of array elements
        var s=obj.sum(array);
        console.log("Sum"+s);
        //insert
        obj.insert(array,18,2);
        console.log("After remove");
        obj.remov(array,30);  
        // Append
        console.log("After append");
        obj.append(array,29);
        //Prepend
        console.log("After Prepend");
        obj.prepend(array,60);
        //Concat
        var array2=[11,67,45];
        obj.concat(array,array2);
        