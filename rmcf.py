import subprocess
def callp(cmd):
	proc=(subprocess.Popen(cmd.split(), stdout=subprocess.PIPE).stdout.read()).decode('utf8')
	print(proc)

callp('rm -v odoo_14.log')
callp('touch odoo_14.log')
