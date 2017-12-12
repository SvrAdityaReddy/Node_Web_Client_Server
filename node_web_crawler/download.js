http=require('http')
fs=require('fs')
path=require('path')
uuidv1=require('uuid/v1')

const download_page=(url='http://nodeprogram.com')=> {
    console.log('downloading ', url)
    const fetch_page=(urlF,callback)=>{
        http.get(urlF, (response)=> {
            let buff=''
            response.on('data',(chunk)=>{
                buff=buff+chunk
            })
            response.on('end',()=>{
                callback(null,buff)
            })
        }).on('error',(error)=>{
            console.log(`Got error: ${error.message}`)
            callback(error)
        })
    }
    const folder_name=uuidv1()
    fs.mkdirSync(folder_name)
    fetch_page(url, (error,data)=>{
        if (error) return console.log(error)
        fs.writeFileSync(path.join(__dirname,folder_name,'url.txt'),url )        
        fs.writeFileSync(path.join(__dirname,folder_name,'file.html'),data )
        console.log('downloading is done in folder ', folder_name)
    })
}

download_page(process.argv[2])