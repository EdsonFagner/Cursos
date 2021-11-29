#include <iostream>
#include <cstdlib>
#include <windows.h>
using namespace std;
int round, x, at, n=1;
void action ();
int main () {
	cout<<"Digite round: ";
	cin>>round;
	x=round;
	cout<<"Digite atordoamento: ";
	cin>>at;
		do	
		{
			action ();
		}
		while (at==1);
		
system("pause");
return 0;
}

void action (){
	do
	{
		if (round!=x+n)
			{
				cout<<"Funcionou: "<<n<<" vez!"<<endl;
				Sleep(1000);
				n++;
				round++;
					if(n==4)
						{
							round++;
						}
			}
		else
			{
				at=0;
			}	
	}
	while (at==1);
}
