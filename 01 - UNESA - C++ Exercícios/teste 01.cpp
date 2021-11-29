#include <iostream>
#include <cstdlib>
using namespace std;
int main ()
{
	int num;
	do {
	cout<<"digite um numero: ";
	cin>>num;
	if ((num>80)or (num<25)or(num==40))
	{
		cout<<"O numero se encaixa nos parametros.";
	}
		}
	while (((num!=40)and(num<80))and((num!=40)and(num>25)));
	system("pause");
	return 0;
}
