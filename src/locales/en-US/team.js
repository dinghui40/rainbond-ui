// 团队下的信息

//总览页面
const teamOverview = {
  'teamOverview.app.name': 'Apply',
  'teamOverview.appNum': 'Application number',
  'teamOverview.component.name': 'Component',
  'teamOverview.useResource': 'Use resources',
  'teamOverview.UserNum': 'Number users',
  'teamOverview.memoryUsage': 'Memory usage',
  'teamOverview.diskUsage': 'Disk Usage',
  'teamOverview.runAppNum': '{ number } running applications',
  'teamOverview.notRunAppNum': '{ number } app that are not running',
  'teamOverview.runAppNums': 'Running：{ number }',
  'teamOverview.notRunAppNums': 'Not running：{ number }',
  'teamOverview.appSum': 'Total { number } app',
  'teamOverview.componentSum': 'Total { number } component',
  'teamOverview.runComponentNum': '{ number } Running components',
  'teamOverview.notRunComponentNum': '{ number } Components that are not running',
  'teamOverview.runStatusSort': 'Running status sorting',
  'teamOverview.updateTimeSort': 'Update time sort',
  'teamOverview.sortTips':'Please select a sort method',
  'teamOverview.searchTips': 'Please enter the application name to search',
  'teamOverview.createApp': 'Create',
  'teamOverview.update': 'Update',
  'teamOverview.memory': 'Memory',
  'teamOverview.visit': 'Access',
  'teamOverview.appList': 'App list',
  'teamOverview.result.title':'The cluster end is not responding, Try again later.',
  'teamOverview.result.description':'If the loading fails, contact the cluster administrator to check the cluster status',
  'teamOverview.loadOverview':'Reload',
  'teamOverview.runAppNums': 'Running：{ number }',
  'teamOverview.notRunAppNums': 'Not running：{ number }',
}

//团队下的应用
const teamApply = {
  'teamApply.title':'Application management',
  'teamApply.desc':'An application can be a project, an architecture, and a management unit of a business system, which consists of multiple components and application configurations.',
  'teamApply.searchTips':'Search app',
  'teamApply.search':'Search',
  'teamApply.createApp':'Create',
  'teamApply.appName':'App name',
  'teamApply.updateTime':'Update time',
  'teamApply.createTime':'Creation time',
  'teamApply.componentNumComparison':'Components (run/total)',
  'teamApply.memoryNumComparison':'Memory Occupied/Memory Allocated (MB)',
  'teamApply.duplicateRecord':'Duplicate record',
  'teamApply.releaseRecord':'Release record',
  'teamApply.remarks':'Note',
}

//团队下的创建 code、image、upload、market、third
const teamAdd = {
  // 公共
  'teamAdd.create.form.appName':'App name',
  'teamAdd.create.form.service_cname':'Component name',
  'teamAdd.create.form.k8s_component_name':'Component English Name',
  'teamAdd.create.form.user':'Warehouse User Name',
  'teamAdd.create.form.password':'Warehouse password',
  'teamAdd.create.btn.create':'Confirm create',
  'teamAdd.create.btn.createComponent':'New component',
  'teamAdd.create.error':'Parameter error',
  'teamAdd.create.createComponentTitle':'Create components',
  
  // code
  'teamAdd.create.code.title':'Create components from the source code',
  'teamAdd.create.code.desc':'Obtains the source code from the specified source repository and creates a new component based on the source information',
  'teamAdd.create.code.customSource':'Custom source code',
  'teamAdd.create.code.demo':'Official DEMO',
  'teamAdd.create.code.address':'Warehouse address',
  'teamAdd.create.code.versions':'Code version',
  'teamAdd.create.code.branch':'Branch',
  'teamAdd.create.code.fillInUser':'Fill in the warehouse account password',
  'teamAdd.create.code.fillInPath':'Enter a subdirectory path',
  'teamAdd.create.code.path':'Subdirectory path',
  'teamAdd.create.code.demoBtn':'View Dmeo source code',
  'teamAdd.create.code.href':'View code',
  'teamAdd.create.code.demo2048':'2048 small game',
  'teamAdd.create.code.demoStatic':'Static Web：hello world !',
  // image
  'teamAdd.create.image.title':'Create components from the Docker image',
  'teamAdd.create.image.desc':'Support for creating applications from a single image, Docker commands, and DockerCompose configuration',
  'teamAdd.create.image.tabImage':'Specified image',
  'teamAdd.create.image.DockerRun':'DockerRun command',
  'teamAdd.create.image.docker_cmd':'Command',
  'teamAdd.create.image.hint1':'This is a private warehouse, right?',
  'teamAdd.create.image.hint2':'Fill in the warehouse account password',
  'teamAdd.create.image.mirrorAddress':'Mirror address',
  'teamAdd.create.image.config':'DockerCompose configuration',
  'teamAdd.create.image.notice':'Pay attention',
  'teamAdd.create.image.configHint':'Note that parsing component related properties in the DockerCompose configuration is used to facilitate component creation, the dynamic variables in the DockerCompose configuration do not support parsing assignment, and a mirror of a private repository is used?',

  //upload
  'teamAdd.create.upload.title':'Upload File Creation',
  'teamAdd.create.upload.desc':'Third-party components are components that run outside the platform cluster. Creating a component on a platform can connect it seamlessly to the platform gateway and be accessed by services on the platform. To meet the users through the platform can be unified monitoring and management of various components.',
  'teamAdd.create.upload.format':'Upload format',
  'teamAdd.create.upload.uploadFiles':'Upload file',
  'teamAdd.create.upload.uploadJWar':'You can upload files in Jar and War formats',
  'teamAdd.create.upload.uploadYaml':'Only YAML files can be uploaded',

  //market
  
  //third
  'teamAdd.create.third.title':'Adding Third-Party Component',
  'teamAdd.create.third.desc':'Third-party components are components that run outside the platform cluster. Creating a component on a platform can connect it seamlessly to the platform gateway and be accessed by services on the platform. To meet the users through the platform can be unified monitoring and management of various components.',
  'teamAdd.create.third.componentRegister':'Registration Mode',
  'teamAdd.create.third.staticRegister':'Static registration',
  'teamAdd.create.third.apiRegister':'API registration',
  'teamAdd.create.third.componentAddress':'Component address',
  'teamAdd.create.third.href':'Click to read the document',
  'teamAdd.create.third.createNewApp':'Creating New Application',
  'teamAdd.create.third.Alert.warning':'The API address is obtained after the component is created',

}

//团队下的网关
const teamGateway = {

  // strategy
  'teamGateway.strategy.title':'Access control',
  'teamGateway.strategy.manage':'Gateway management',
  'teamGateway.strategy.btn.add':'Add policy',
  'teamGateway.strategy.placeholder.http':'Search for domain name, application, or component',
  'teamGateway.strategy.placeholder.tcp':'Search for ports, applications, and components',
  'teamGateway.strategy.btn.search':'Search',
  'teamGateway.strategy.table.domain':'Domain',
  'teamGateway.strategy.table.type':'Type',
  'teamGateway.strategy.table.end_point':'Port',
  'teamGateway.strategy.table.protocol':'Agreement',
  'teamGateway.strategy.table.is_senior':'Advanced routing',
  'teamGateway.strategy.table.certificate_alias':'Certificate',
  'teamGateway.strategy.table.group_name':'App',
  'teamGateway.strategy.table.service_cname':'Components (ports)',
  'teamGateway.strategy.table.operate':'Operation',
  'teamGateway.strategy.table.config':'Config',
  'teamGateway.strategy.table.edit':'Edit',
  'teamGateway.strategy.table.delete':'Delete',
  'teamGateway.strategy.table.type.default':'Default',
  'teamGateway.strategy.table.type.custom':'Custom',
  'teamGateway.strategy.table.type.tooltip':'You can perform this operation only after enabling external services',
  'teamGateway.strategy.table.type.tooltip.onclick':'Click Enable External Service to operate',
  'teamGateway.strategy.table.type.open':'Open',
  'teamGateway.strategy.table.type.joinMsg':'Connection information',
  'teamGateway.strategy.table.type.null':'Empty',

  // certificate
  'teamGateway.certificate.title':'Certificate management',
  'teamGateway.certificate.desc':'TLS Certificate management: Supports server certificates and displays the certificate expiration time',
  'teamGateway.certificate.btn.add':'Add certificate',
  'teamGateway.certificate.table.name':'Name certificate',
  'teamGateway.certificate.table.address':'Address certificate',
  'teamGateway.certificate.table.time':'Expiration time',
  'teamGateway.certificate.table.type':'Certificate type',
  'teamGateway.certificate.table.source':'Certificate origin',
  'teamGateway.certificate.table.operate':'Operation',
  'teamGateway.certificate.table.edit':'Edit',
  'teamGateway.certificate.table.update':'Update',
  'teamGateway.certificate.table.delete':'Delete',
}

const teamPlugin = {
  'teamPlugin.title':'My plug-in',
  'teamPlugin.list':'My plug-in',
  'teamPlugin.desc':'Application plug-ins are standardized applications that provide functional extensions to an application and run with the application',
  'teamPlugin.hint':'Install/create plug-ins from the app Market',
  'teamPlugin.btn.marketAdd':'Install from the app Marketplace',
  'teamPlugin.btn.add':'New plug-in',
  'teamPlugin.btn.delete':'Delete',
  'teamPlugin.btn.manage':'Manage',
  'teamPlugin.btn.install':'Install',
  'teamPlugin.install.title':'Install plugin',
  'teamPlugin.create.title':'Create plugin',
  'teamPlugin.create.lable.plugin_alias':'Plugin name',
  'teamPlugin.create.lable.build_source':'Install source',
  'teamPlugin.create.lable.category':'Plugin class',
  'teamPlugin.create.lable.image':'Mirror address',
  'teamPlugin.create.lable.code_repo':'Source address',
  'teamPlugin.create.lable.username':'Warehouse User Name',
  'teamPlugin.create.lable.password':'Warehouse password',
  'teamPlugin.create.lable.code_version':'Code version',
  'teamPlugin.create.lable.min_cpu':'CPU',
  'teamPlugin.create.lable.min_cpu':'Start command',
  'teamPlugin.create.lable.update_info':'Updated instructions',
  'teamPlugin.create.lable.desc':'One sentence explanation',
  'teamPlugin.create.pages.key':'Configuring Authorization Key',
  'teamPlugin.create.pages.btn':'Fill in the warehouse account password',
  'teamPlugin.create.pages.image':'Mirror',
  'teamPlugin.create.pages.dockerfile':'Dockerfile',
  'teamPlugin.create.pages.entrance':'Entrance network',
  'teamPlugin.create.pages.exit':'Export network',
  'teamPlugin.create.pages.entrance_exit':'Egress and inlet cogovernance network',
  'teamPlugin.create.pages.performance':'Performance analysis',
  'teamPlugin.create.pages.initialize':'Type initialization',
  'teamPlugin.create.pages.ordinary':'General type',
  'teamPlugin.create.pages.monitor':'Monitor',
  'teamPlugin.create.pages.cpu':'CPU allocation 0: unlimited. 1000 MB =1core.',
}

const teamManage = {
  'teamManage.create.time':'Founded in',
  'teamManage.tabs.exitTeam':'Delete team',
  'teamManage.tabs.deleteTeam':'Quit team',
  'teamManage.tabs.setting':'Team set up',
  
  // 动态 dynamic
  'teamManage.tabs.dynamic':'Dynamic',
  'teamManage.tabs.dynamic.notDynamic':'No dynamic',
  'teamManage.tabs.dynamic.meta.app':' App ',
  'teamManage.tabs.dynamic.title.addTeam':'The following users apply to join the team',
  'teamManage.tabs.dynamic.modal.title':'User authorization',
  'teamManage.tabs.dynamic.table.user':'User',
  'teamManage.tabs.dynamic.form.lable':'Select role',
  'teamManage.tabs.dynamic.form.placeholder':'Please select roles',
  'teamManage.tabs.dynamic.table.time':'Apply time',
  'teamManage.tabs.dynamic.table.operate':'Operation',
  'teamManage.tabs.dynamic.table.btn.through':'Through',
  'teamManage.tabs.dynamic.table.btn.refuse':'Refused',
  'teamManage.tabs.dynamic.title.dynamic':'Dynamic',
  'teamManage.tabs.dynamic.table.name':'App name',
  'teamManage.tabs.dynamic.table.operateTime':'Operating time',
  'teamManage.tabs.dynamic.table.operateContent':'Operating content',
  'teamManage.tabs.dynamic.table.operateDetail':'Operation details',
  'teamManage.tabs.dynamic.table.btn.checkDetail':'Check details',
  'teamManage.tabs.dynamic.table.btn.popconfirm':'Are you sure you want to reject the user?',

  //成员 member
  'teamManage.tabs.member':'Members',
  'teamManage.tabs.member.title':'Team members',
  'teamManage.tabs.member.btn.add':'Add members',
  'teamManage.tabs.member.table.userName':'User name',
  'teamManage.tabs.member.table.name':'Name',
  'teamManage.tabs.member.table.email':'Email',
  'teamManage.tabs.member.table.role':'Role',
  'teamManage.tabs.member.table.operate':'Operation',
  'teamManage.tabs.member.table.delete':'Delete',
  'teamManage.tabs.member.table.editRole':'Modify role',
  'teamManage.tabs.member.table.turnOver':'Handed team',

  //集群 cluster
  'teamManage.tabs.cluster':'Cluster',
  'teamManage.tabs.cluster.openCluster':'Cluster has been opened.',
  'teamManage.tabs.cluster.open':'Open clusters',
  'teamManage.tabs.cluster.unload':'uninstall',
  'teamManage.tabs.cluster.opened':'Opened in',
  'teamManage.tabs.cluster.null':'No cluster',
  'teamManage.tabs.cluster.unloadCluster':'Uninstall cluster',
  'teamManage.tabs.cluster.unloadCluster.desc':'Uninstalling the current cluster will also delete related resources created by the team in the cluster. Are you sure you want to uninstall it?',
  // 角色 role
  'teamManage.tabs.role':'Role',
  'teamManage.tabs.role.btn.add':'Add role',
  'teamManage.tabs.role.null':'If no role exists, add a role first',
  'teamManage.tabs.role.title':'Role list',
  'teamManage.tabs.role.list.admin':'admin',
  'teamManage.tabs.role.list.developer':'Developers',
  'teamManage.tabs.role.list.viewer':'Observer',
  'teamManage.tabs.role.list.access':'Visitor',
  'teamManage.tabs.role.list.owner':'Owner',
  'teamManage.tabs.role.list.admin':'Enterprise Administrator',
  'teamManage.tabs.role.list.app_store':'Application Marketing Manager',
  // 权限设置 Permissions
  'teamManage.tabs.role.list.permissions':'Permissions',
  'teamManage.tabs.role.list.permissions.btn.cancel':'Cancel',
  'teamManage.tabs.role.list.permissions.roleName':'Character name',
  'teamManage.tabs.role.list.permissions.allot':'Permissions allocate',
  'teamManage.tabs.role.list.permissions.teamMsg':'Viewing Team Information',
  'teamManage.tabs.role.list.permissions.teamDynamic':'Check Team Dynamics',
  'teamManage.tabs.role.list.permissions.maven':'Managing Maven configuration',
  'teamManage.tabs.role.list.permissions.teamRegion':'Team cluster Management',
  'teamManage.tabs.role.list.permissions.teamMember':'Team member management',
  'teamManage.tabs.role.list.permissions.teamRole':'Team Role Management',
  'teamManage.tabs.role.list.permissions.app_config_group':'Application configuration group management',
  'teamManage.tabs.role.list.permissions.teamRegistryAuth':'Image warehouse authorization information management',
  'teamManage.tabs.role.list.permissions.certificate':'Certificate management',
  'teamManage.tabs.role.list.permissions.gatewayRule':'Gateway access policy management',
  'teamManage.tabs.role.list.permissions.app':'Application management',
  'teamManage.tabs.role.list.permissions.component':'Component management',
  'teamManage.tabs.role.list.permissions.plugin':'Plug-in management',

  //镜像仓库授权信息 image
  'teamManage.tabs.image':'Mirroring warehouse authorization information',
  'teamManage.tabs.image.table.imageAddress':'Mirror Warehouse Address',
  'teamManage.tabs.image.table.user':'User name',
  'teamManage.tabs.image.table.password':'Password',
  'teamManage.tabs.image.table.operate':'Operation',
  'teamManage.tabs.image.table.btn.add':'Add',
  'teamManage.tabs.image.table.btn.edit':'Edit',
  'teamManage.tabs.image.table.btn.delete':'Delete',
  
}
const teamOther = {
  'teamOther.AddThirdParty.start':'Start with third-party components',
  'teamOther.AddThirdParty.Third':'Third party components',
  'teamOther.AddThirdParty.add':'Add third party components',
  'teamOther.Group.tit':'Application information',
  'teamOther.Group.desc':'An application is composed of one or more services, which can manage a complete business system, such as OA, CRM, ERP, etc., and can also manage a complete microservice architecture system. Here is the basic information of the application.',
  'teamOther.Group.app':'Application topology',
  'teamOther.Group.know':'Known',
  'teamOther.Group.Topological':'This is the internal service topology diagram of the application. Through the topology diagram, you can understand the running status and dependency of the service as a whole. Each hexagon is a service. Click the hexagon to enter the service management page.',
  // AllBackup
  'teamOther.AllBackup.Backup':'Backup in progress',
  'teamOther.AllBackup.success':'Backup succeeded',
  'teamOther.AllBackup.failed':'Backup failed',
  'teamOther.AllBackup.create_time':'Backup time',
  'teamOther.AllBackup.user':'Backup by',
  'teamOther.AllBackup.mode':'Backup mode',
  'teamOther.AllBackup.full-online':'Cloud Backup ',
  'teamOther.AllBackup.full-offline':'Local backup',
  'teamOther.AllBackup.backup_size':'Package size',
  'teamOther.AllBackup.state':'state',
  'teamOther.AllBackup.app':'Backup application',
  'teamOther.AllBackup.remarks':'Remarks',
  'teamOther.AllBackup.operation':'Operation',
  'teamOther.AllBackup.recovery':'Recovery',
  'teamOther.AllBackup.transfer':'Transfer',
  'teamOther.AllBackup.export':'Export',
  'teamOther.AllBackup.delete':'Delete',
  'teamOther.AllBackup.records':'Apply backup records',
  'teamOther.AllBackup.all_records':'Application backup records are all backup records of the current team, including those of deleted applications. Deleted applications can be recovered or migrated based on the backup',

  'teamOther.edit.editHead':'Modify responsible person',
  'teamOther.edit.head':'head',
  'teamOther.edit.choose':'Please select the person in charge',
  'teamOther.edit.go':'Go to the certification',
  'teamOther.edit.unbounded':'The {type} account has not been bound',

}


export default Object.assign({}, teamOverview, teamApply, teamAdd, teamGateway, teamPlugin, teamManage, teamOther);   
