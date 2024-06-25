    module.exports = function (grunt){
        grunt.initConfig({
            pkg: grunt.file.readJSON('package.json'),
            less: {
                development: {
                    files:{
                        'main.css': 'main.less'
                    }
                },
                production:{
                    options:{
                        compress: true,
                    },
                    files:{
                        'main.min.css': 'Main.less'
                    }
                }
            },
            sass:{
                dist:{
                    options:{
                        style: 'compressed'
                    },
                    files:{
                        'main2.css': 'main.scss'
                    }
                }
            },
            concurrent:{
                target:['OlaGrunt', 'less', 'sass']
            }
        })

        // Criando uma tarefa assincrona
        grunt.registerTask('OlaGrunt', function(){
            const done =this.async()
            setTimeout (function(){
                console.log('Olá Grunt')
                done()
            }, 3000)
        })

        grunt.loadNpmTasks('grunt-contrib-less')
        grunt.loadNpmTasks('grunt-contrib-sass')
        grunt.loadNpmTasks('grunt-concurrent')

        grunt.registerTask('default', ['concurrent'])
}