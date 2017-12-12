fs=require('fs')
path=require('path')

const convert_csv=(file='customer-data.csv',json_file='customer-data.json')=>{
    const read_data=(file_name,callback)=> {
        fs.readFile(path.join(__dirname,file_name),{encoding: 'utf-8'}, callback)
    }
    read_data(file, (error, data)=> {
        if(error) return console.log(error)
        data=data.split(/\r?\n/)
        let length=data.length
        let header=data[0].split(',')
        let json_raw_data=[]
        i=1
        while(i<length) {
            obj={}
            j=0
            meta_data=data[i].split(',') 
            while(j<header.length) {
                obj[header[j]]=meta_data[j]
                j=j+1
            }
            i=i+1
            json_raw_data.push(obj)
        }
        try {
            fs.writeFileSync(path.join(__dirname,json_file),JSON.stringify(json_raw_data,null,4))
        } 
        catch (e) {
            console.error(e.message)
        }
    })    
}

convert_csv()